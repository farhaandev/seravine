import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="text-2xl font-serif tracking-widest font-bold mb-6 block">
                        SERAVINE
                    </Link>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs font-medium">
                        Refining the art of perfumery with the world's most exquisite ingredients. Luxury in every drop.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-foreground">Explore</h4>
                    <ul className="space-y-4">
                        <li><Link href="/shop" className="text-sm text-gray-600 hover:text-gold transition-colors font-medium">Shop All</Link></li>
                        <li><Link href="/about" className="text-sm text-gray-600 hover:text-gold transition-colors font-medium">Our Story</Link></li>
                        <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gold transition-colors font-medium">Sustainability</Link></li>
                    </ul>
                </div>

                {/* Customer Care */}
                <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-foreground">Customer Care</h4>
                    <ul className="space-y-4">
                        <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gold transition-colors font-medium">Contact Us</Link></li>
                        <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gold transition-colors font-medium">Shipping & Returns</Link></li>
                        <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gold transition-colors font-medium">FAQ</Link></li>
                    </ul>
                </div>

                {/* Contact & Location */}
                <div className="col-span-1">
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-foreground">Visit Us</h4>
                    <p className="text-sm text-gray-600 font-medium mb-4">
                        Mani Kalan, Jaunpur, <br />
                        Uttar Pradesh, India
                    </p>
                    <div className="space-y-2">
                        <p className="text-sm text-gray-600 font-medium">
                            <span className="text-gold uppercase tracking-widest text-[9px] mr-2">Call</span>
                            +91 63881 35456
                        </p>
                        <p className="text-sm text-gray-600 font-medium">
                            <span className="text-gold uppercase tracking-widest text-[9px] mr-2">Email</span>
                            info.seravineperfume@gmail.com
                        </p>
                    </div>
                </div>

                {/* Social */}
                <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-foreground">Follow Our Journey</h4>
                    <Link href="https://instagram.com/__seravineperfume" target="_blank" className="text-sm text-gray-600 hover:text-gold transition-colors font-medium flex items-center">
                        <span className="mr-2">@__seravineperfume</span>
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 border-t border-gray-50 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-600 font-bold">
                <p>&copy; {new Date().getFullYear()} SERAVINE PERFUME. All Rights Reserved.</p>
                <div className="flex space-x-8 mt-4 md:mt-0">
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
