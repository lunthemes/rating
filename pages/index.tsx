import Head from 'next/head';
import Image from 'next/image';
import AppHead from '../components/Layout/Head';
import RatingContainer from '../components/Layout/RatingContainer';
import { RatingContextProvider } from '../pages/providers/RatingProvider';

export default function Home() {
  return (
    <RatingContextProvider>
      <div>
        <AppHead />
        <RatingContainer />
      </div>
    </RatingContextProvider>
  )
}
