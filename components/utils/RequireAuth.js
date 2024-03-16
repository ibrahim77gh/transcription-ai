'use client';

import { redirect } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import Spinner from '../Spinner';

export default function RequireAuth({ children }) {
	const { isLoading, isAuthenticated } = useAppSelector(state => state.auth);

	if (isLoading) {
		return (
			<Spinner />
		);
	}

	if (!isAuthenticated) {
		redirect('/auth/sign-in');
	}

	return <>{children}</>;
}