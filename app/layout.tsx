import "@/styles/globals.css";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <nav className={styles.topNav}>
                    <Link href="/about">About</Link>
                </nav>
                {children}
                <div className={styles.footer}>
                    built with reckless abandon by{" "}
                    <a href="https://swizec.com">Swizec</a>
                    <br />
                    Thank you to arXiv for use of its open access
                    interoperability.
                </div>
            </body>
        </html>
    );
}
