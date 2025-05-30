import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
                {/* Header */}
                <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
                    <h1 className="text-xl font-semibold">P18 Fitness</h1>
                    <nav className="space-x-4">
                        {auth.user ? (
                            <Link href={route('dashboard')} className="text-white hover:text-yellow-500">Dashboard</Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="text-white hover:text-yellow-500">Log in</Link>
                                <Link href={route('register')} className="text-white hover:text-yellow-500">Register</Link>
                            </>
                        )}
                    </nav>
                </header>

                {/* Hero Section */}
                <section className="text-center py-20 px-6">
                    <h2 className="text-4xl font-bold mb-4 text-yellow-400">Get Fit at Home with P18 Fitness</h2>
                    <p className="max-w-xl mx-auto mb-6 text-gray-300">
                        Unlock your full potential with structured daily workout plans and expert training videos. No equipment needed.
                    </p>
                    <Link
                        href={auth.user ? route('dashboard') : route('register')}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold"
                    >
                        {auth.user ? 'Go to Dashboard' : 'Join Now'}
                    </Link>
                </section>

                {/* Features Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 bg-[#121212]">
                    <div className="bg-[#1b1b1b] p-6 rounded-lg shadow text-center">
                        <h3 className="text-xl font-bold mb-2 text-yellow-400">Video-based Training</h3>
                        <p className="text-gray-400">Follow along with YouTube and Drive-hosted workouts.</p>
                    </div>
                    <div className="bg-[#1b1b1b] p-6 rounded-lg shadow text-center">
                        <h3 className="text-xl font-bold mb-2 text-yellow-400">Progress Tracking</h3>
                        <p className="text-gray-400">Mark workouts as complete and unlock the next one.</p>
                    </div>
                    <div className="bg-[#1b1b1b] p-6 rounded-lg shadow text-center">
                        <h3 className="text-xl font-bold mb-2 text-yellow-400">Mobile Friendly</h3>
                        <p className="text-gray-400">Use our app on any device, anytime, anywhere.</p>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="px-6 py-16 bg-black text-center">
                    <h3 className="text-2xl font-bold mb-8 text-yellow-400">What Our Users Say</h3>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <blockquote className="bg-[#1b1b1b] p-6 rounded shadow">
                            <p className="italic text-gray-300">“The P18 workouts transformed my daily routine. Super easy to follow!”</p>
                            <footer className="mt-4 text-yellow-500 font-semibold">— Alex K.</footer>
                        </blockquote>
                        <blockquote className="bg-[#1b1b1b] p-6 rounded shadow">
                            <p className="italic text-gray-300">“Love the clean UI and the progression logic. Keeps me motivated.”</p>
                            <footer className="mt-4 text-yellow-500 font-semibold">— Sana R.</footer>
                        </blockquote>
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center py-6 border-t border-gray-800 bg-[#0a0a0a]">
                    <p className="text-sm text-gray-500">© 2025 P18 Fitness. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}
