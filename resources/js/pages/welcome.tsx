import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome | Minhaj Pro">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#121212] font-[Outfit] text-white flex flex-col items-center justify-center px-6">
                <header className="w-full max-w-6xl py-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] to-[#cccccc]">
                        Minhaj Pro
                    </h1>
                    <nav className="flex items-center space-x-4 text-sm">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-1.5 rounded-xl hover:bg-white/20 transition"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-1.5 rounded-xl hover:bg-white/20 transition"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-1.5 rounded-xl hover:bg-white/20 transition"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <main className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-10 py-12">
                    <div className="flex-1 p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 shadow-xl">
                        <h2 className="text-3xl font-semibold mb-4">Hi, I'm Minhaj</h2>
                        <p className="text-gray-300 mb-4">
                            A passionate developer & UI designer who builds modern and
                            accessible web applications.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>✅ Full Stack Web Development</li>
                            <li>🎨 UI/UX Design & Branding</li>
                            <li>⚡ Performance & SEO Optimization</li>
                        </ul>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="https://github.com/minhajp18"
                                target="_blank"
                                className="text-white border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10 transition"
                            >
                                GitHub
                            </a>
                            <a
                                href="mailto:minhajt.uae@gmail.com"
                                className="text-white border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10 transition"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Flip Card */}
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-80 h-80 [perspective:1000px]">
                            <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]">
                                {/* Front Side */}
                                <div className="absolute inset-0 bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center p-4 [backface-visibility:hidden]">
                                    <img
                                        src="https://i.postimg.cc/ZRhhH4wm/Mi-NHAJ-Profile-picture.jpg"
                                        alt="Minhaj"
                                        className="w-28 h-28 rounded-full object-cover border border-white/30 shadow-md mb-4"
                                    />
                                    <h3 className="text-xl font-semibold">Minhaj</h3>
                                    <p className="text-sm text-gray-300">
                                        Full Stack Developer
                                    </p>
                                    <p className="mt-2 text-xs text-gray-400">
                                        Hover to book an appointment
                                    </p>
                                </div>

                                {/* Back Side */}
                                <div className="absolute inset-0 bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-4 text-sm text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <h4 className="text-center text-lg font-semibold mb-2">
                                        Book Appointment
                                    </h4>
                                    <form
                                        action="https://formsubmit.co/minhaj.it@ayenz.com"
                                        method="POST"
                                        className="space-y-3"
                                    >
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            required
                                            className="w-full px-3 py-2 bg-white/20 rounded-lg border border-white/30 placeholder-white text-white focus:outline-none"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required
                                            className="w-full px-3 py-2 bg-white/20 rounded-lg border border-white/30 placeholder-white text-white focus:outline-none"
                                        />
                                        <textarea
                                            name="message"
                                            rows={3}
                                            placeholder="Message"
                                            required
                                            className="w-full px-3 py-2 bg-white/20 rounded-lg border border-white/30 placeholder-white text-white focus:outline-none"
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="w-full py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg transition"
                                        >
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="w-full max-w-6xl text-center text-xs text-gray-500 py-6">
                    &copy; {new Date().getFullYear()} Minhaj Pro. All rights reserved.
                </footer>
            </div>
        </>
    );
}
