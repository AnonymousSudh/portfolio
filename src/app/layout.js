import { Inter } from 'next/font/google';
import './globals.css';
import { Animations } from '../components/Animations';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Sudhanshu Portfolio App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='w-screen h-screen'>
					<Animations>{children}</Animations>
				</div>
			</body>
		</html>
	);
}
