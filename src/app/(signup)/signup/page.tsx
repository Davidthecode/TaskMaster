import type { Metadata } from 'next';
import SignupComponent from '@/app/components/signup/signupComponent';

export const metadata: Metadata = {
    title: 'Create Account - Try TaskMaster for free',
    description: 'A modern platform for cross-functional work',
};

export default function Signup () {
    return (
        <SignupComponent />
    )
}