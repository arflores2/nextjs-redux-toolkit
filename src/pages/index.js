import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'

import { useStore } from '../state/store';

export default function Index() {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    router.push('/dashboard');
  }
  return null;
}