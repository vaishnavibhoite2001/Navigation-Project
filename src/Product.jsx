import './index.css';
import { HashLink } from 'react-router-hash-link';
const Product =()=>{
    return(
        <>
        <div style={{textAlign: 'center'}}>
            <h1>Product</h1>
            <div className='list-style'>
                <HashLink to="#one">
                    <li>1:iPhone and iPad</li>
                </HashLink>
                <HashLink to="#two">
                    <li>2:Apple Watch</li>
                </HashLink>
                <HashLink to="#three">
                    <li>3:Apple TV</li>
                </HashLink>
                <HashLink to="#four">
                    <li>4:Apple Airtag</li>
                </HashLink>
    
            </div>
        </div>
        <div id="one">
            <h1>1</h1>
            <p>
            The iPhone is Apple's smartphone line, and the iPad is its tablet. The iPhone was the first smartphone to receive mass market adoption due to its ease of use, built-in app store and capacitive multitouch touchscreen. The iPhone uses the "A" series mobile CPU, and recent iPads use the same "M" series CPUs as Mac computers. Their operating systems iOS and iPadOS, are based on the same Unix kernel as macOS but have a touch-focused interface. Excepturi laboriosam veritatis vel, eveniet, distinctio quidem fugit maiores corrupti quibusdam sapiente, consequuntur commodi?
            The main functional difference between the iPhone and the iPad is that the iPhone can be used to make phone calls over a cellular network, whereas the iPad cannot. Every iPhone is able to send data over the cellular networks, whereas the iPad comes in two versions: one that can use cellular data and one that can't.
            </p>
        </div>
        <div id="two">
            <h1>2</h1>
            <p>
            The Apple Watch is a smartwatch and fitness tracker. It can monitor health signals, such as ECG, blood oxygen and heart rate data. It can also act as a digital key, allowing users to unlock, lock and start compatible cars. The Apple Watch runs on the watchOS operating system.
            Apple Watch SE has a water resistance rating of 50 metres under ISO standard 22810:2010. This means that it may be used for shallow-water activities like swimming in a pool or ocean. Apple Watch SE should not be used for scuba diving, waterskiing or other activities involving high-velocity water or submersion below shallow depth. Water resistance is not a permanent condition and can diminish over time. For additional information, see support.apple.com/en-in/HT205000.

            </p>
        </div>
        <div id="three">
            <h1>3</h1>
            <p>
             Apple TV is a television set-top box and streaming media device. AppleTV has voice control capabilities and can integrate with other Apple devices via Airplay. It also has video conferencing features and the ability to locate the Siri remote. The Apple TV runs on the tvOS operating system.
             Apple TV 4K
            The ultimate
            TV experience is calling.
            Barbie is available to buy or rent on the Apple TV app.
            Apple TV 4K unites your favourite Apple services with all your streaming apps in our best-ever picture and sound quality — thanks to the blazing-fast A15 Bionic chip. Enjoy a new FaceTime experience on TV1 that brings your friends and family into your living room — and onto the biggest screen in your home. And with seamless interaction with all your devices and smart home accessories2, it’s everything you love about Apple — at its cinematic best.
            </p>
        </div>
        <div id="four">
            <h1>4</h1>
            <p>
            The Apple Airtag is a small tracking device. Users can attach it to items they wish to track and see its location using the Find My app. The Airtag uses Bluetooth to establish its location by communicating with other devices in the Find My network.
            AirTags use the devices connected to Apple's network in order to locate missing devices, but according to Apple, "no location data or location history is physically stored inside AirTag. Communication with the Find My network is end-to-end encrypted so that only the owner of a device has access to its location data, and no one, including Apple, knows the identity or location of any device that helped find it.” In other words, an AirTag owner can only determine the location of their own AirTag, not any other nearby Apple devices.


            </p>
        </div>
        
        </>
    );
};

export default Product;