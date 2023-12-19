import { ArrowPathIcon, ChatBubbleOvalLeftEllipsisIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, UserGroupIcon, WrenchIcon } from '@heroicons/react/24/outline'
import Footer from '../components/footer'
import NavBar from '../components/NavBar'
import Stats from '../components/stats'
const features = [
    {
        name: 'Diversity',
        description:
            "Race, gender, and personality are all a vital part of our team's plan to provide opportunities for kids in our school to participate in an engineering club. Our teams diversity: 54% Indian, 40% Women, 33% White, 13% East, Asian 3% LGBTQIA",
        icon: UserGroupIcon,
    },
    {
        name: 'Innovation',
        description:
            "Our team is focused on innovation for success. Focusing on risk-based design we combine the excitement of competitive sports with the rigors of science and technology. We maxing material efficient driven by limited supplies and funding. this leads to minimizing waste and maximizing the material value. We leverage critical thinking to go through design selection. We prioritize designs that enable game winning strategy plays ",
        icon: WrenchIcon,
    },
    {
        name: 'Collaboration',
        description:
            'We have fun while designing and building the robot. we focus on networking with industries professional, empowering each team member to lead and own a segment in the robot development journey. This includes both technical development and team spirit. from fundraising, swag design and T-shirt printing to metal welding, electrical and software coding. Everyone had a job, and owns it.',
        icon: ChatBubbleOvalLeftEllipsisIcon,
    },

]

export default function AboutUs() {
    return (
        <div>
            <NavBar />
            <div className="bg-white pt-8">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-blue-800">About Trojan Robotics</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need to know about our great team!
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Ever since the founding of Trojan Robotics, the values of inclusion and diversity have been the foundation of our success.
                        </p>
                    </div>
                    <Stats />
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-5 lg:max-w-none lg:grid-cols-2 lg:gap-y-7">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-800">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
