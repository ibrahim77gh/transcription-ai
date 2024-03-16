'use client';

// import { useVerify } from '@/hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { useVerifyMutation } from '@/redux/features/authApiSlice';
import { setAuth, finishInitialLoad } from '@/redux/features/authSlice';

export default function Setup() {
	const dispatch = useAppDispatch();
	const [verify] = useVerifyMutation();

	useEffect(() => {
		verify(undefined)
			.unwrap()
			.then(() => {
				dispatch(setAuth())
			})
			.finally(() => {
				dispatch(finishInitialLoad());
			})

	}, [])

	return <ToastContainer />;
}