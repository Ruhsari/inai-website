export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                backgroundColor: '#141A51',
                minHeight: '100vh',
                backgroundImage: `url('/loginBack.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {children}
        </div>
    );
}