import Footer from '@sections/Footer/page';
import '@styles/globals.css';
import cx from '@styles/MainStyle.module.scss';

export const metadata = {
    title: 'Portfolio',
    description: 'Generated by create next app',
}

const RootLayout = ({children,}: {children: React.ReactNode}) => {
    return (
        <html lang="en">
            <body>
                <div className={cx['bg-page']}>
                    {children}
                </div>
                <Footer/>
            </body>
        </html>
    )
}

export default RootLayout;