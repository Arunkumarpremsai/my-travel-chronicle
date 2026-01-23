import Header from '@/components/Header';
import Footer from '@/components/Footer';
import authorImg from '@/assets/images/author.jpg';
import { MapPin, Camera, Coffee, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-6">
              About Me
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A slow traveler, storyteller, and perpetual student of the world.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <img
                  src={authorImg}
                  alt="Emma - Travel Blogger"
                  className="w-full aspect-[4/5] object-cover rounded-lg shadow-medium"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-lg -z-10" />
                {/* Updated Location Badge */}
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <div className="text-xs">
                    <span className="text-muted-foreground block leading-none mb-1">Currently In</span>
                    <span className="font-medium text-foreground">Chennai, India</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-heading text-3xl font-medium text-foreground mb-6">
                  Hello, I'm Emma
                </h2>
                <div className="prose-travel text-muted-foreground space-y-4">
                  <p>
                    I traded my corporate desk for a backpack five years ago, and I haven't 
                    looked back since. What started as a sabbatical became a lifestyle – 
                    one of slow travel, meaningful connections, and endless curiosity.
                  </p>
                  <p>
                    This blog is my way of sharing the stories that don't fit in a social 
                    media caption. The ones about the families who welcomed me into their 
                    homes, the hidden trails that led to unexpected views, and the meals 
                    that taught me more about a culture than any guidebook could.
                  </p>
                  <p>
                    I believe travel isn't about checking destinations off a list – it's 
                    about the transformation that happens when we step outside our comfort 
                    zones and let the world change us.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats/Values */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-border">
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div className="font-heading text-2xl font-medium text-foreground mb-1">47</div>
                <div className="text-muted-foreground text-sm">Countries Visited</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Camera size={24} className="text-primary" />
                </div>
                <div className="font-heading text-2xl font-medium text-foreground mb-1">10K+</div>
                <div className="text-muted-foreground text-sm">Photos Taken</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Coffee size={24} className="text-primary" />
                </div>
                <div className="font-heading text-2xl font-medium text-foreground mb-1">∞</div>
                <div className="text-muted-foreground text-sm">Cups of Coffee</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart size={24} className="text-primary" />
                </div>
                <div className="font-heading text-2xl font-medium text-foreground mb-1">100+</div>
                <div className="text-muted-foreground text-sm">Stories Shared</div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="py-12">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-6 text-center">
                My Travel Philosophy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-card rounded-lg shadow-soft">
                  <h4 className="font-heading text-lg font-medium text-foreground mb-2">
                    Slow is Better
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    I'd rather spend a month in one town than a day in ten. Depth over breadth, 
                    always.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg shadow-soft">
                  <h4 className="font-heading text-lg font-medium text-foreground mb-2">
                    People Over Places
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    The most memorable moments come from connections with locals, not tourist 
                    attractions.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg shadow-soft">
                  <h4 className="font-heading text-lg font-medium text-foreground mb-2">
                    Leave No Trace
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Travel with respect for the places and communities that host us. Take only 
                    photos, leave only gratitude.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
