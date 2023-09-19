import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import {getStorage, getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {app} from '../../firebase/firebase.config';
import {v4 as uuidv4} from 'uuid';
//import profileImage from '../../assets/profileImage.jpg'
const Registration = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const { createUser, updateProfileArea } = useContext(AuthContext);
    const [selectedImages,setSelectedImages] = useState(null);
   
    let photoURL = "https://firebasestorage.googleapis.com/v0/b/threadzone-30d7b.appspot.com/o/threadZone%2Fimage%2Ffb968c24-0567-4049-a1c0-e37ce3d2ae6c_27470334_7309681.jpg?alt=media&token=2e8fbffe-8d7a-4450-bd13-1fc716a7af5a";
    
      //firebase config 
  const Storage = getStorage(app);
   //Image Upload 
     const uniqueId = uuidv4();


  const uploadImages = async () => {
    let imageUrls;
      const imageName = `${uniqueId}_${selectedImages.name}`;
      const imageRef = ref(Storage, `empowerRise/image/${imageName}`);
      await uploadBytes(imageRef, selectedImages)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              imageUrls = url;
              photoURL = url;
             // console.log("image ",url);
            })
        })
    return imageUrls;
  };

    const onSubmit = async(data) => {
        console.log('user data ', data);
        if(selectedImages){
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer:5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })
        Toast.fire({
        icon: 'info',
        title: 'Waiting for image being uploaded !! '
        })
         await uploadImages();
        }
        console.log("photo url ",photoURL)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                return updateProfileArea(data.name, data.photoURL); // Return the promise
            })
            .then(() => {
                const saveUser = { name: data.name, email: data.email, photoURL,  phoneNumber: data.phoneNumber, address: data.address,role:'user' };
                return fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                });
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('user profile info updated');
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');
                }
            })
            .catch(error => console.log(error));
    };
    const password = watch('password');

    return (
        <div className="mb-4 mt-5">
            <h1 className="text-3xl font-bold mb-4 text-center">Create Your Account</h1>
            <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="text"
                                    id="name"
                                    {...register('name', { required: true })}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="email"
                                    id="email"
                                    {...register('email', { required: true })}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs italic">Email is required.</p>
                                )}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="password"
                                    id="password"
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()/]).*/,
                                    })}
                                />
                                {errors.password?.type === 'required' && (
                                    <p className="text-red-500 text-xs italic">Password is required.</p>
                                )}
                                {errors.password?.type === 'minLength' && (
                                    <p className="text-red-500 text-xs italic">Password must be at least 6 characters long.</p>
                                )}
                                {errors.password?.type === 'pattern' && (
                                    <p className="text-red-500 text-xs italic">
                                        Password must contain at least one capital letter and one special character.
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="password"
                                    id="confirmPassword"
                                    {...register('confirmPassword', {
                                        required: true,
                                        validate: (value) => value === password || 'Passwords do not match.',
                                    })}
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>
                                )}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="photoUrl">
                                    Photo
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="file"
                                    id="photoUrl"
                                    onBlur={(e)=>{setSelectedImages(e.target.files[0])}}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
                                    Phone Number
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="text"
                                    id="phoneNumber"
                                    {...register('phoneNumber')}
                                />
                            </div>

                        </div>
                        <div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                                    Address
                                </label>
                                <textarea
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="address"
                                    {...register('address')}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <button
                                className="bg-[#408697] hover:bg-[#52D6F4] text-white font-bold py-4 mt-4 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                type="submit"
                            >
                                Register
                            </button>
                        </div>
                        <div>
                            <p className="mb-0 mt-2 pt-1 text-xl font-bold">
                                Already Have an account ?
                                <Link
                                    to='/login'
                                    className="text-red-700 transition duration-150 ease-in-out hover:text-danger-600 focus:text-red-600 active:text-red-700"
                                >  Login
                                </Link>
                            </p>
                        </div>

                        <div>
                            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">OR</p>
                            </div>
                        </div>

                    </form>


                </div>
            </div>
        </div>

    );
};

export default Registration;




