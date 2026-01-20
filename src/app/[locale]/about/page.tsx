'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Globe, Star, Mountain, Award, Shield } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function AboutPage() {
    const t = useTranslations();
    const pathname = usePathname();
    const currentLocale = pathname.startsWith('/sw') ? 'sw' : 'en';

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const values = currentLocale === 'sw' ? [
        { icon: <Target size={32} />, title: 'Kusudi', description: 'Kila hatua inalenga matokeo yanayoathiri jamii na taifa.' },
        { icon: <Heart size={32} />, title: 'Uhai Kwanza', description: 'Utoaji damu na afya ni msingi wa kila tunachofanya.' },
        { icon: <Users size={32} />, title: 'Jamii', description: 'Tunaamini nguvu ya hatua ya pamoja na uwajibikaji wa pamoja.' },
        { icon: <Globe size={32} />, title: 'Ujumuishaji', description: 'Wazi kwa wote wanaotaka kuchangia, bila kujali asili.' },
        { icon: <Star size={32} />, title: 'Ubora', description: 'Tunalenga viwango vya juu katika athari na utekelezaji.' },
        { icon: <Mountain size={32} />, title: 'Ustahimilivu', description: 'Kama Kilimanjaro, tunasimama imara katika ahadi yetu.' },
    ] : [
        { icon: <Target size={32} />, title: 'Purpose-Driven', description: 'Every action ties to meaningful community outcomes.' },
        { icon: <Heart size={32} />, title: 'Life First', description: 'Blood donation and health are at our core.' },
        { icon: <Users size={32} />, title: 'Community', description: 'We believe in collective action and shared responsibility.' },
        { icon: <Globe size={32} />, title: 'Inclusivity', description: 'Open to all who wish to contribute.' },
        { icon: <Star size={32} />, title: 'Excellence', description: 'We strive for the highest standards in impact.' },
        { icon: <Mountain size={32} />, title: 'Resilience', description: 'Like Kilimanjaro, we stand firm in our commitment.' },
    ];

    const timeline = currentLocale === 'sw' ? [
        { year: '2024', title: 'Maono', description: 'Dhana ya Kili Basecamp ilizaliwa kutoka kwa ndoto ya kubadilisha msimu wa Kilimanjaro Marathon kuwa jukwaa la athari ya kitaifa.' },
        { year: '2025', title: 'Kujenga Msingi', description: 'Ushirikiano ulianzishwa na serikali, hospitali, na mashirika ya kiraia nchini Tanzania.' },
        { year: '2026', title: 'Harakati Inaanza', description: 'Kili Basecamp Experience ya kwanza rasmi inaanza, ikiunganisha maelfu kwa afya, kusudi, na uwajibikaji wa kitaifa.' },
    ] : [
        { year: '2024', title: 'The Vision', description: 'Kili Basecamp concept was born from the vision of transforming the Kilimanjaro Marathon season into a platform for national impact.' },
        { year: '2025', title: 'Building Foundations', description: 'Partnerships established with government, hospitals, and civil society organizations across Tanzania.' },
        { year: '2026', title: 'The Movement Begins', description: 'First official Kili Basecamp Experience launches, uniting thousands for health, purpose, and national responsibility.' },
    ];

    const team = [
        { name: 'Dr. Sarah Juma', role: 'Executive Director', image: '/img/team-1.jpg' },
        { name: 'James Mwangi', role: 'Operations Lead', image: '/img/team-2.jpg' },
        { name: 'Aisha Bakari', role: 'Community Outreach', image: '/img/team-3.jpg' },
    ];

    return (
        <>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                paddingTop: '6rem',
            }}>
                {/* Background Image */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: "url('/img/elephant-babies-278525_1920.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                }}>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/60 to-gray-50" />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6"
                        >
                            <Mountain size={16} />
                            {currentLocale === 'sw' ? 'Hadithi Yetu' : 'Our Story'}
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                            {currentLocale === 'sw' ? 'Kuhusu Kili Basecamp' : 'About Kili Basecamp'}
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed w-full">
                            {currentLocale === 'sw'
                                ? 'Harakati ya uhai, uwajibikaji, na kusudi la pamoja — iliyoanzishwa chini ya Mlima Kilimanjaro.'
                                : 'A movement for life, responsibility, and collective purpose — rooted at the foot of Kilimanjaro.'}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
                                {currentLocale === 'sw' ? 'Maono Yetu' : 'Our Vision'}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                {t('about.title')}
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {t('about.description')}
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {currentLocale === 'sw'
                                    ? 'Tunawaleta pamoja vijana, wataalamu, taasisi, na jamii kuunda athari inayopimika kupitia afya, ustawi, na huduma ya kitaifa.'
                                    : 'We bring together youth, professionals, institutions, and communities to create measurable impact through health, wellness, and national service.'}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="space-y-4 translate-y-8">
                                    <div className="bg-gray-100 rounded-2xl h-48 w-full object-cover overflow-hidden">
                                        {/* Placeholder for vision image 1 */}
                                        <div className="w-full h-full bg-gray-200 animate-pulse" />
                                    </div>
                                    <div className="bg-primary/5 rounded-2xl p-6">
                                        <Target className="text-primary w-8 h-8 mb-3" />
                                        <h4 className="font-bold text-gray-900">Purpose</h4>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-secondary/5 rounded-2xl p-6">
                                        <Heart className="text-secondary w-8 h-8 mb-3" />
                                        <h4 className="font-bold text-gray-900">Health</h4>
                                    </div>
                                    <div className="bg-gray-100 rounded-2xl h-48 w-full object-cover overflow-hidden">
                                        {/* Placeholder for vision image 2 */}
                                        <div className="w-full h-full bg-gray-200 animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* Volunteers & Community Section */}
            <section className="section bg-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-1/2" />

                <div className="container relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-100 rounded-3xl h-64 w-full overflow-hidden">
                                    {/* Placeholder Image */}
                                    <div className="w-full h-full bg-gray-200 animate-pulse" />
                                </div>
                                <div className="bg-gray-100 rounded-3xl h-64 w-full overflow-hidden translate-y-8">
                                    {/* Placeholder Image */}
                                    <div className="w-full h-full bg-gray-200 animate-pulse" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
                                {currentLocale === 'sw' ? 'Jamii Yetu' : 'Our Volunteers'}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                {currentLocale === 'sw' ? 'Nguvu ya Watu' : 'Powered by People'}
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {currentLocale === 'sw'
                                    ? 'Kili Basecamp inaendeshwa na mamia ya wajitolea wanaojitolea muda wao na nguvu zao kuleta mabadiliko.'
                                    : 'Kili Basecamp represents the collective energy of hundreds of volunteers dedicating their time and passion to make a difference.'}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                                    <Users className="text-primary w-5 h-5" />
                                    <span className="font-semibold text-gray-900">500+ Volunteers</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                                    <Globe className="text-secondary w-5 h-5" />
                                    <span className="font-semibold text-gray-900">6 Regions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section bg-gray-100 text-white">
                <div className="container">
                    <div className="text-center w-full mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentLocale === 'sw' ? 'Maadili Yetu' : 'Our Values'}</h2>
                        <p className="text-gray-400 text-lg">{currentLocale === 'sw' ? 'Kanuni zinazotuongoza katika kila tunachofanya' : 'The principles that guide everything we do'}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/20 text-primary-light flex items-center justify-center mb-6">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                                <p className="text-gray-400 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SDG Alignment */}
            <section className="section border-t border-gray-200">
                <div className="container text-center">
                    <div className="w-full mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {currentLocale === 'sw' ? 'Malengo ya Maendeleo Endelevu' : 'SDG Alignment'}
                        </h2>
                        <p className="text-gray-600 mb-8">
                            {currentLocale === 'sw'
                                ? 'Kili Basecamp inachangia moja kwa moja vipaumbele vya afya vya Tanzania na Malengo ya Maendeleo Endelevu ya Umoja wa Mataifa.'
                                : 'Kili Basecamp directly contributes to Tanzania\'s national health priorities and the UN Sustainable Development Goals.'}
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            {['SDG 3: Good Health', 'SDG 4: Quality Education', 'SDG 17: Partnerships'].map((sdg, index) => (
                                <span key={index} className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold text-sm">
                                    {sdg}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
