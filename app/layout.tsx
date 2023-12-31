// imports
import Cursor from '@components/Cursor/page';
import Footer from '@sections/Footer/page';
import '@styles/globals.css';
import cx from '@styles/MainStyle.module.scss';
import '@utils/cursorState';

export const metadata = {
    title: `PJ's Portfolio`,
    description: 'Generated by create next app',
}

const RootLayout = ({children,}: {children: React.ReactNode}) => {
    return (
        <html lang="en">
            <body>
                <Cursor/>
                <div className={cx['bg-page']}>
                    {children}
                </div>
                <Footer/>
            </body>
        </html>
    )
}

export default RootLayout;