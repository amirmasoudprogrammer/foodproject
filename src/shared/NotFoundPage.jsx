import React from 'react';
import Link from "next/link";

function NotFoundPage(props) {
    return (
        <main className="flex flex-col items-center justify-start pt-20 px-6 md:px-16 lg:px-32 text-gray-800">

            {/* 404 Content */}
            <section className="w-full max-w-3xl text-center">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[color:var(--brand-green,#1f6b3f)] mb-6">
                    صفحه پیدا نشد!
                </h1>

                <div className="text-[140px] md:text-[220px] leading-none font-black text-[color:var(--brand-green,#1f6b3f)]">
                    404
                </div>

                <p className="mt-6 text-md md:text-lg max-w-xl mx-auto text-gray-700">
                    به نظر می‌رسد وارد مسیری شدید که در منوی ما وجود ندارد.
                </p>




                <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Link
                        href="/menu"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[color:var(--brand-green,#1f6b3f)] text-white text-base font-medium shadow-sm hover:opacity-95"
                    >
                        مشاهده منو
                    </Link>

                    <Link href="/" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white border border-[color:var(--brand-green,#1f6b3f)] text-[color:var(--brand-green,#1f6b3f)] text-base font-medium shadow-sm hover:bg-[color:var(--bg-green,#f3fbef)]">
                        رفتن به صفحه اصلی
                    </Link>
                </div>


                <div className="mt-8 text-sm text-gray-600">
                    یا می‌توانید از نوار بالای صفحه برای جستجوی غذاها استفاده کنید.
                </div>
            </section>

            <footer className="w-full max-w-5xl mt-20 py-8 text-sm text-gray-600 flex items-center justify-between">
                <div>© {new Date().getFullYear()} ترخینه</div>
                <div>تماس با ما • درباره ما</div>
            </footer>
        </main>

    );
}

export default NotFoundPage;