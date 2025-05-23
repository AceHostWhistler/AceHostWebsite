import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";

const CelebritiesInfluencersBlog = () => {
  const currentArticleLink = "/post/celebrities-influencers-spotted-in-whistler-with-acehost";

  return (
    <>
      <Head>
        <title>
          Celebrities/Influencers Spotted in Whistler with AceHost | AceHost
        </title>
        <meta
          name="description"
          content="Discover the A-listers and top influencers who've chosen AceHost for their Whistler getaways. From the Riverdale cast to fashion icons and adventure filmmakers, see who's been spotted enjoying our luxury properties."
        />
        <meta property="og:image" content="https://acehost.ca/photos/post/Blog Celebrities Spotted/65205b536bfe86e898fc902d_image002 (1).png" />
        <meta property="twitter:image" content="https://acehost.ca/photos/post/Blog Celebrities Spotted/65205b536bfe86e898fc902d_image002 (1).png" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-20">
          {/* Blog Header */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Celebrity Spotting
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                10 min read
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Celebrities/Influencers Spotted in Whistler with AceHost
            </h1>

            <div className="flex items-center text-gray-600 text-sm mb-8">
              <span>Published on</span>
              <span className="ml-1 font-medium">December 15, 2024</span>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-10">
              <h2 className="text-xl font-semibold mb-3">Summary</h2>
              <p className="text-gray-700">
                Whistler isn't just a playground for winter sports enthusiasts—it's also a hotspot for celebrities and influencers seeking luxury mountain escapes. In this blog, we reveal some of the biggest stars who've chosen AceHost's luxury properties for their Whistler adventures, from Hollywood actors to social media sensations.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-6xl mx-auto mb-16 px-4 sm:px-6">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/photos/post/Blog Celebrities Spotted/65205b536bfe86e898fc902d_image002 (1).png"
                alt="Celebrities and influencers in Whistler"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Blog Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <article className="prose prose-lg max-w-none">
              <div className="not-prose">
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Whistler has long been a magnet for the rich and famous, drawn to its world-class slopes, breathtaking scenery, and exclusive atmosphere. At AceHost, we've had the privilege of hosting some of the most recognizable names in entertainment and social media in our luxury properties. Let's take a peek at who's been spotted enjoying the Whistler lifestyle in our stunning chalets and condos.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 mb-12">
                <h2 className="text-3xl font-bold mt-0 mb-6">
                  Riverdale Takes Over Whistler
                </h2>
                <p className="mb-6">
                  The stars of the hit series "Riverdale" have made Whistler their winter playground of choice, bringing their on-screen chemistry to our mountain paradise. With their combined Instagram following of nearly 100 million, these young Hollywood stars know how to make an impression both on and off the slopes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Lili Reinhart</h3>
                    <p className="text-gray-700 mb-2">26.8 Million Followers</p>
                    <p className="text-gray-700">Betty Cooper on screen, snowboarding enthusiast off screen, Lili was spotted taking on Whistler's black diamond runs with impressive skill.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Camila Mendes</h3>
                    <p className="text-gray-700 mb-2">25.9 Million Followers</p>
                    <p className="text-gray-700">Veronica Lodge herself traded high heels for snow boots during her stay at our Kadenwood luxury chalet.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Madelaine Petsch</h3>
                    <p className="text-gray-700 mb-2">25.2 Million Followers</p>
                    <p className="text-gray-700">Cheryl Blossom's fiery personality took on the winter chill during an epic snowmobiling adventure arranged by our concierge team.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Vanessa Morgan</h3>
                    <p className="text-gray-700 mb-2">9 Million Followers</p>
                    <p className="text-gray-700">Toni Topaz actress Vanessa was all smiles during her Whistler getaway, particularly enjoying our private chef services after long days on the mountain.</p>
                  </div>
                </div>

                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-6 max-w-md mx-auto">
                  <Image
                    src="/photos/post/Blog Celebrities Spotted/65205b536bfe86e898fc902d_image002 (1).png"
                    alt="Riverdale cast enjoying Whistler"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                    priority
                  />
                </div>
                
                <p className="mb-0">
                  The "Riverdale" gang didn't just stay in – they were spotted snowmobiling through Whistler's breathtaking backcountry, turning heads at the Bearfoot Bistro, and enjoying après-ski at The Longhorn Saloon, all while staying at our stunning "Chalet La Forja" property.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 mb-12">
                <h2 className="text-3xl font-bold mt-0 mb-6">
                  Digital Content Creators & Tech Influencers
                </h2>
                
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    Justin Tse: Tech Meets Luxury
                  </h3>
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 mb-4">
                        <span className="font-bold">821K YouTube Subscribers | 140K Instagram Followers</span>
                      </p>
                      <p className="text-gray-700">
                        Known for his stunning photography, filmmaking talents, and famous tour of that $250 million New York property, Justin Tse brought his creative eye to Whistler. The tech and lifestyle influencer, who has collaborated with luxury brands like Mercedes, Audi, and Four Seasons, captured the essence of our Whistler properties with his signature cinematic style.
                      </p>
                      <p className="text-gray-700 mt-4">
                        During his stay, Justin created breathtaking content featuring our luxury chalets and even joined one of our exclusive helicopter tours, giving his nearly one million followers a bird's-eye view of Whistler's majestic landscapes.
                      </p>
                      <div className="mt-6">
                        <a href="https://www.youtube.com/watch?v=cNHhE2B8Zeo&t=40s" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-sm font-medium">
                          <span>Watch Justin's Whistler Adventure</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-60 md:h-full w-full rounded-lg overflow-hidden">
                        <Image 
                          src="/photos/post/Blog Celebrities Spotted/670606b1d0dfd39e7ffac7c9_Screen Shot 2024-10-08 at 9.29.23 PM (1).png" 
                          alt="Justin Tse filming in Whistler"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    PropertyGrams & Luxury Real Estate Influencers
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="font-bold mb-2">Tyler Hassman with PropertyGrams</p>
                      <p className="text-gray-700 mb-2">294K YouTube | 381K Instagram</p>
                      <p className="text-gray-700 mb-4">
                        The PropertyGrams team visited just before Christmas, capturing stunning footage of our most exclusive listings. Their high-quality home video tours have become a favorite resource for luxury travelers planning their Whistler escape.
                      </p>
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image 
                          src="/photos/post/Blog Celebrities Spotted/651c937e64d308b5dbe3414f_image004 (1).png" 
                          alt="Tyler Hassman with PropertyGrams"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          priority
                        />
                      </div>
                      <div className="mt-4">
                        <a href="https://www.youtube.com/watch?v=oF3yJfGKW8Q" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-sm font-medium">
                          <span>Watch PropertyGrams' Luxury Tour</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold mb-2">Luxury Listings</p>
                      <p className="text-gray-700 mb-2">3.3 Million Instagram Followers</p>
                      <p className="text-gray-700">
                        This premier platform for luxury property enthusiasts featured our most opulent chalets, showcasing the extraordinary service and comfort that define the AceHost experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 mb-12">
                <h2 className="text-3xl font-bold mt-0 mb-6">
                  Social Media Sensations
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Francesca Farago & Jessi Sullivan</h3>
                    <p className="text-gray-700 mb-3"><span className="font-medium">6.2 Million + 406K Instagram Followers</span></p>
                    <p className="text-gray-700 mb-4">
                      Reality TV star Francesca Farago and lifestyle influencer Jessi Sullivan created waves with their Whistler content, including a viral reel that garnered over 1.5 million views. The duo showcased the perfect balance of luxury relaxation and winter adventure during their stay.
                    </p>
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image 
                        src="/photos/post/Blog Celebrities Spotted/652108333b9e3eff6f422bbb_image005 (1).png" 
                        alt="Francesca Farago in Whistler"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="mt-4">
                      <a href="https://www.instagram.com/reel/Cr4A3r0rmOM/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-pink-600 transition-colors text-sm font-medium">
                        <span>Watch Francesca's Viral Reel (1.5M+ Views)</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Ari Kytsya</h3>
                    <p className="text-gray-700 mb-3"><span className="font-medium">4.5 Million TikTok Followers</span></p>
                    <p className="text-gray-700 mb-4">
                      TikTok sensation Ari Kytsya brought her massive following to Whistler, documenting her AceHost experience with her signature vibrant style. Her content showcased the perfect blend of luxury accommodations and thrilling winter adventures.
                    </p>
                    <div className="mb-4">
                      <a href="https://www.instagram.com/reel/DI-Xmc1pa_a/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-pink-600 transition-colors text-sm font-medium">
                        <span>Watch Ari's AceHost Reel</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-6">
                  LA's Style Squad Takes Whistler
                </h3>
                <p className="mb-6">
                  Last winter, a group of LA's hottest lifestyle and fashion content creators descended on Whistler, bringing their massive followings along for the ride. These social media powerhouses were spotted everywhere from the slopes to the most exclusive restaurants:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold">Kylie Rae</p>
                    <p className="text-gray-600">2.3 Million Instagram</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold">Ayla Woodruff</p>
                    <p className="text-gray-600">1.5 Million Instagram</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold">Franny Arrieta</p>
                    <p className="text-gray-600">467K Instagram</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold">Fiona Barron</p>
                    <p className="text-gray-600">1 Million Instagram</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold">Corin Clark</p>
                    <p className="text-gray-600">191K Instagram</p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-8 max-w-2xl mx-auto">
                  <Image 
                    src="/photos/post/Blog Celebrities Spotted/65205c6674572904228e48cc_image008.jpg" 
                    alt="Ayla Woodruff and LA influencers in Whistler"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
                
                <p className="mb-0">
                  The LA crew was photographed conquering the slopes by day and enjoying Whistler's legendary nightlife at hotspots like Bearfoot Bistro and The Longhorn Saloon by night, all while calling our luxury Kadenwood neighborhood properties home.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 mb-12">
                <h2 className="text-3xl font-bold mt-0 mb-6">
                  Adventure & Content Creation Specialists
                </h2>
                
                <div className="mb-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    Mattih: YouTube Phenomenon
                  </h3>
                  <p className="font-medium mb-2">1.31 Million YouTube Subscribers</p>
                  <p className="text-gray-700 mb-4">
                    Popular YouTuber Matti showcased AceHost's luxury rentals with his signature style, creating content that captured both the epic outdoor adventures and cozy luxury of our properties. Watch this space for his return visit planned for his birthday celebration this December!
                  </p>
                  <div className="mb-4">
                    <a href="https://www.instagram.com/reel/CsRVLJDAdV5/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-pink-600 transition-colors text-sm font-medium">
                      <span>Check Out Matti's AceHost Reel</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    Fernanda Ramirez: Travel & Lifestyle Creator
                  </h3>
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 mb-3">
                        <span className="font-medium">1.51 Million YouTube Subscribers</span>
                      </p>
                      <p className="text-gray-700 mb-4">
                        Travel and lifestyle creator Fernanda Ramirez documented her entire Whistler adventure with AceHost, giving her massive audience an in-depth look at the luxury accommodations and winter experiences that make Whistler special. Her video takes viewers through all the highlights of her stay, from cozy evenings by the fireplace to thrilling days on the mountain.
                      </p>
                      <div>
                        <a href="https://www.youtube.com/watch?v=XDX8ocCu9Cw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-sm font-medium">
                          <span>Watch Fernanda's Whistler Adventure</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-60 md:h-full w-full rounded-lg overflow-hidden">
                        <Image 
                          src="/photos/post/Blog Celebrities Spotted/Screen Shot 2025-05-23 at 12.12.51 PM.png" 
                          alt="Fernanda Ramirez in Whistler"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    Aerial Cinema Masters: Emmett & Zach Moxley
                  </h3>
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 mb-3">
                        <span className="font-medium">Emmett: 1 Million+ Followers | Zach Moxley: 110K Followers</span>
                      </p>
                      <p className="text-gray-700">
                        This dynamic duo specializes in breathtaking aerial cinematography that has been featured by major brands worldwide. Using 6K drone technology, Emmett and Zach captured our properties from perspectives that showcase the stunning mountain backdrops and architectural brilliance of our luxury chalets.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 md:h-full w-full rounded-lg overflow-hidden">
                        <Image 
                          src="/photos/homepage/ViewOurCollection.jpg" 
                          alt="Luxury property captured by drone"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 mb-12">
                <h2 className="text-3xl font-bold mt-0 mb-6">
                  Local Legends & Pro Athletes
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Strawberry Milkmob</h3>
                    <p className="text-gray-700 mb-2"><span className="font-medium">2.3 Million TikTok Followers</span></p>
                    <p className="text-gray-700 mb-4">
                      This viral TikTok sensation has made waves with their unique content and distinctive style. Their house tour of one of our premium properties gave followers an inside look at luxury Whistler living.
                    </p>
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                      <Image 
                        src="/photos/post/Blog Celebrities Spotted/670608551d414959a1ab18b2_IMG_4939.jpg" 
                        alt="Strawberry Milkmob in Whistler"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="mt-4">
                      <a href="https://www.tiktok.com/@strawberrymilkmob/video/7344517108136594693" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
                        <span>Watch Strawberry Milkmob's House Tour</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Mark McMorris</h3>
                    <p className="text-gray-700 mb-2"><span className="font-medium">812K Instagram Followers</span></p>
                    <p className="text-gray-700">
                      Olympic snowboarding medalist Mark McMorris has been spotted at AceHost properties, bringing his world-class talent to both the slopes and our premium accommodations. When not competing, Mark appreciates the privacy and comfort our properties provide for athletes looking to rest and recover in style.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-8 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Star-Spotting in Whistler
                </h2>
                <p className="text-lg mb-6">
                  Whistler continues to be a magnet for celebrities and influencers drawn to its perfect combination of natural beauty, luxury accommodations, and privacy. While we respect our guests' privacy, it's always exciting to see how these creative individuals showcase their Whistler experiences to millions of followers worldwide.
                </p>
                <p className="text-lg mb-0">
                  Keep an eye on our Instagram and other social channels for glimpses of the latest stars enjoying our properties, and who knows – you might find yourself sharing a chairlift with a celebrity during your next Whistler vacation!
                </p>
              </div>
            </article>
            
            {/* Call to Action */}
            <div className="bg-black text-white rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold mb-4">Experience Celebrity-Worthy Luxury</h3>
              <p className="mb-6">Want to vacation like your favorite stars? Book one of our premium properties and enjoy the same exceptional spaces and concierge services that have made AceHost the choice of celebrities and influencers in Whistler.</p>
              <Link
                href="/properties"
                className="inline-flex items-center bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium">View Luxury Properties</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* More Articles Section */}
            <BlogRelatedArticles currentArticleLink={currentArticleLink} />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CelebritiesInfluencersBlog; 