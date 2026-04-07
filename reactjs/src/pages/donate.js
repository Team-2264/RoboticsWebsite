
import Footer from '../components/footer'
import NavBar from '../components/NavBar'

export default function Donate() {
    return (
        <div>
            <NavBar />
            <div className="bg-white pt-8">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                How To Donate</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Trojan Robotics appreciates all donations.
                        </p>
                    </div>
                    <br></br>
                <div className="grid grd-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <h1 className='mt-2 text-3x1 font-bold tracking-tight text:gray-900 sm:text-4x1 text-lg'>
                            Personal Donations:
                        </h1>
                        <p className = 'text-md'>
                            Write check to: Wayzata High School <br></br>
                            In the notes section (bottom left) add: Trojan Robotics 2264 <br></br>
                            Mail check to: Wayzata High School <br></br>
                            Attn: Kari Lynch - Donation for Trojan Robotics <br></br>
                            4955 Peony Ln N, Plymouth, MN 55446<br></br>
                        </p>
                </div>    
                <div>          
                        <h1 className='mt-2 text-3x1 font-bold tracking-tight text:gray-900 sm:text-4x1 text-lg'>
                            Company Donations:
                        </h1>
                        <p className = 'text-md'>
                            Talk to your company's HR representative and see if they are able to donate to “FIRST Robotics”, “Women in STEM”, “Diversity in STEM”, or “ PublicSchools” <br></br>
                            The donations/funds should be written out to: Wayzata High School<br></br>
                            Our EIN is 416001464. <br></br>
                        </p>
                </div>
                </div>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}
