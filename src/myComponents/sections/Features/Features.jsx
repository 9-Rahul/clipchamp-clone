import React from "react";
import styles from "./Features.module.css";
import Button from "@/myComponents/ui/Button/Button"
import Image from "next/image";

export default function Features() {
    return (
        <section className={styles['features-outer']}>
            <div className={styles['feature-one']}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles['features-video']}
                >
                    <source src="/assets/videos/bgVid.mp4" type="video/mp4" />
                </video>

                <div className={styles['features-vid-content-cover']}>
                    <div className={styles['features-vid-content-container']}>
                        <div className={styles['features-vid-content']}>
                            <h1>Quick and easy video editor</h1>
                            <p>Record, edit, and share HD videos online using AI <br />
                                video editing tools, no expertise required.</p>

                            <div className={styles['features-btn-container']}>
                                <a href="https://app.clipchamp.com/login?referrer=ClipchampSEOPages&referrerScenario=Direct.Landing.NoIntent">
                                    <Button variant="secondary btn-create-vid">Create a video</Button></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['features-section-outer']}>

                <div className={styles['feature-section']}>
                    <div className={styles['features-text']}>
                        <h2>Online camera, screen, and voice recorder</h2>
                        <p>Record audio, screen, and webcam securely, using Windows and Mac devices.
                            Enjoy unlimited retakes, improve sound and video quality with AI tools,
                            and export audio and video in HD quality.</p>

                        <div className={styles['features-section-btn-container']}>
                            <a href="https://clipchamp.com/en/webcam-recorder/">
                                <Button variant="primary">Learn more about online recording tools</Button>
                            </a>
                        </div>
                    </div>

                    <div className={styles['features-img-container']}>
                        <Image className={styles['features-img']} src="/assets/images/voice-img.png"
                            alt="feature-img" height={280} width={500} loading="lazy" />
                    </div>
                </div>
                <div className={styles['feature-section-two-cover']}>
                    <div className={`${styles['feature-section']} ${styles.two}`}>
                        <div className={styles['features-img-container']}>
                            <Image className={styles['features-img']} src="/assets/images/ai-sub.png"
                                alt="feature-img" height={280} width={500} loading="lazy" />
                        </div>


                        <div className={styles['features-text']}>
                            <h2>Smart AI subtitle generator</h2>
                            <p>Improve video accessibility by generating accurate AI captions in over 80 global languages.
                                Easily transcribe video audio in seconds, edit the style, font, and colors of subtitles,
                                then export engaging videos in high-quality for free.</p>

                            <div className={styles['features-section-btn-container']}>

                                <a href="https://clipchamp.com/en/subtitle-generator/">
                                    <Button variant="primary">Learn more about adding subtitles to videos</Button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles['feature-section']}>
                    <div className={styles['features-text']}>
                        <h2>Natural AI voiceover generator</h2>
                        <p>Turn text into lifelike speech to create realistic AI voiceovers for any video.
                            Select from a wide range of global languages, choose a unique voice,
                            and edit pitch and pace to accurately turn script into narration. </p>

                        <div className={styles['features-section-btn-container']}>
                            <a href="https://clipchamp.com/en/features/ai-voice-over-generator/">
                                <Button variant="primary">Learn more about AI text to speech</Button>
                            </a>
                        </div>
                    </div>

                    <div className={styles['features-img-container']}>
                        <Image className={styles['features-img']} src="/assets/images/feature-three.png"
                            alt="feature-img" height={280} width={500} loading="lazy" />
                    </div>
                </div>

                <div className={styles['feature-section-two-cover']}>
                    <div className={`${styles['feature-section']} ${styles.two}`}>
                        <div className={styles['features-img-container']}>
                            <Image className={styles['features-img']} src="/assets/images/ai-audio.png"
                                alt="feature-img" height={280} width={500} loading="lazy" />
                        </div>


                        <div className={styles['features-text']}>
                            <h2>Intuitive AI audio editing tools</h2>
                            <p>Enhance voice clarity in videos and audio by removing background noise, unwanted pauses and silences,
                                and eliminating filler words with AI editing techniques. Instantly improve meeting recordings, vlogs,
                                and video presentations without losing quality to impress viewers.</p>

                            <div className={styles['features-section-btn-container']}>
                                <Button variant="primary">Learn more about cleaning up audio</Button>
                            </div>
                        </div>

                    </div>
                </div>



                <div className={styles['feature-section']}>
                    <div className={styles['features-text']}>
                        <h2>Explore royalty-free stock assets</h2>
                        <p>Create without limits with high-quality stock videos, images, music, stickers,
                            GIFs, and sound effects. Add royalty-free assets in different genres to suit videos
                            for work, school, or social media. Navigate to the content library on the toolbar to
                            browse <a href="">curated collections</a> and find the perfect clips for any video.</p>

                        <div className={styles['features-section-btn-container']}>
                            <Button variant="primary">Find royalty-free stock assets</Button>
                        </div>
                    </div>

                    <div className={styles['features-img-container']}>
                        <a href="https://clipchamp.com/en/stock/">
                            <Image className={styles['features-img']} src="/assets/images/royalty.png"
                                alt="feature-img" height={280} width={500} loading="lazy" />
                        </a>
                    </div>
                </div>

                <div className={styles['feature-section-two-cover']}>

                    <div className={`${styles['feature-section']} ${styles.two}`}>
                        <div className={styles['features-img-container']}>
                            <Image className={styles['features-img']} src="/assets/images/safe-secure.png"
                                alt="feature-img" height={280} width={500} loading="lazy" />
                        </div>


                        <div className={styles['features-text']}>
                            <h2>Safe and secure video sharing</h2>
                            <p>Record, edit, and share videos confidently and securely with your <a href="">privacy guaranteed <svg viewBox="0 0 24 24" fill="#4D43DE" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 4C13 3.44772 13.4477 3 14 3H20C20.1356 3 20.2649 3.02699 20.3828 3.07588C20.5007 3.12468 20.6112 3.19702 20.7071 3.29289C20.803 3.38877 20.8753 3.49927 20.9241 3.61722C20.973 3.73512 21 3.86441 21 4V4.00017V10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10V6.41421L13.5071 11.9071C13.1166 12.2976 12.4834 12.2976 12.0929 11.9071C11.7024 11.5166 11.7024 10.8834 12.0929 10.4929L17.5858 5H14C13.4477 5 13 4.55228 13 4Z"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3H9C9.55228 3 10 3.44772 10 4C10 4.55228 9.55228 5 9 5H6Z"></path></svg></a>.
                                Export an unlimited number of videos and audio files in HD quality, without any watermarks.</p>

                            <div className={styles['features-section-btn-container']}>
                                <a href="https://app.clipchamp.com/login?referrer=ClipchampSEOPages&referrerScenario=Direct.Landing.NoIntent">
                                    <Button variant="primary">Start editing and sharing videos now</Button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={`${styles['feature-section']} ${styles.three}`}>
                <div className={`${styles['features-text']} ${styles.three}`}>
                    <h2>Edit professional videos from anywhere</h2>
                </div>

                <div className={styles['features-cards-container']}>
                    {/* Card 1 */}
                    <div className={styles['feature-card']}>
                        <div className={styles['icon-and-card-title']}>
                            <div className={styles['card-icon']}>
                                <Image src="/assets/icons/browser-icon.png" alt="browser-icon-img" height={50} width={50} loading="lazy" />
                            </div>
                            <h3>In-browser app</h3>
                        </div>
                        <p>Clipchamp video editor lets you create professional videos from your web browser, without needing to download any software. Use the pro video maker to access recording tools, video templates, and AI editing features all in the one place.</p>
                        <a href="#">Make a video now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['arrow-icon']}><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
                    </div>

                    {/* Card 2 */}
                    <div className={styles['feature-card']}>
                        <div className={styles['icon-and-card-title']}>
                            <div className={styles['card-icon']}>
                                <Image src="/assets/icons/desktop-icon.png" alt="desktop-icon-img" height={50} width={50} loading="lazy" />
                            </div>
                            <h3>Desktop app</h3>
                        </div>

                        <p>Find Clipchamp video editor in the Start menu on Windows 11 or download for Windows 10 from the <a href="#">Microsoft Store</a>. Premium video editing features are available with a <a href="#">Microsoft 365</a> subscription.</p>
                        <a href="#">Download for Windows <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['arrow-icon']}><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
                    </div>

                    {/* Card 3 */}
                    <div className={styles['feature-card']}>
                        <div className={styles['icon-and-card-title']}>
                            <div className={styles['card-icon']}>
                                <Image src="/assets/icons/ios-icon.png" alt="ios-icon-img" height={50} width={50} loading="lazy" />
                            </div>
                            <h3>iOS app</h3>
                        </div>
                        <p>Create videos from any location, anytime, available in the App Store. Record, edit, and add AI captions to videos while on the go using any iOS device.</p>
                        <a href="#">Download for iOS <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['arrow-icon']}><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
                    </div>
                </div>
            </div>


        </section>
    );
}
