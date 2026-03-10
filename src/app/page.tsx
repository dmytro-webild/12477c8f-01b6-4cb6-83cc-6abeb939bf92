"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Award, Home, CheckCircle, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmallSizeMediumTitles"
      background="none"
      cardStyle="inset"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Elizabethtown Heating & Cooling"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
          ]}
          button={{
            text: "Schedule Your System Check",            href: "contact"}}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="35 Years of Comfort Every Season"
          description="Expert HVAC installation, repair, and maintenance for residential homes across Elizabethtown and surrounding areas. Trusted by thousands of homeowners since 1989"
          tag="Local HVAC Expertise"
          imageSrc="http://img.b2bpic.net/free-photo/electrician-installing-laying-electrical-cables-ceiling-inside-house_169016-53070.jpg"
          imageAlt="Professional HVAC system installation and maintenance"
          mediaAnimation="slide-up"
          background={{ variant: "plain" }}
          testimonials={[
            {
              name: "Margaret Johnson",              handle: "Homeowner, Lancaster PA",              testimonial: "They replaced our 20-year-old system with a top-of-the-line unit. Professional, courteous, and the system runs so smoothly. Worth every penny.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiley-man-looking-camera-holding-cup-coffee_23-2148306626.jpg",              imageAlt: "Margaret Johnson testimonial"},
            {
              name: "Robert Chen",              handle: "Business Owner, Lititz PA",              testimonial: "Emergency repair on a freezing Sunday. They showed up within an hour and diagnosed the problem immediately. Exceptional service and fair pricing.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-360.jpg",              imageAlt: "Robert Chen testimonial"},
            {
              name: "Susan & David Miller",              handle: "Retired Homeowners, Ephrata PA",              testimonial: "We've used them for over 10 years. Their maintenance plans keep our system running perfectly and their technicians are always respectful and knowledgeable.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/elder-couple-posing-photo_23-2148201328.jpg",              imageAlt: "Susan and David Miller testimonial"},
            {
              name: "Jessica Rodriguez",              handle: "Executive, Denver PA",              testimonial: "They provided a detailed energy efficiency audit and explained all our options without pressure. The new system has reduced our bills by 30%. Highly recommend.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/charming-young-attractive-woman-sitting-lounge-zone-coworking-space-lying-couch-hold-laptop-laps-look-pleased-netbook-display-smiling-delighted-talking-videocall-working-freelance_197531-30338.jpg",              imageAlt: "Jessica Rodriguez testimonial"},
          ]}
          buttons={[
            {
              text: "Schedule Your System Check",              href: "contact"},
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
          tagAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Serving Elizabethtown & Lancaster County Since 1989 | PA Licensed & Insured | 35 Years of Excellence"
          metrics={[
            { icon: Award, label: "Years of Expertise", value: "35+" },
            { icon: Home, label: "Homeowners Served", value: "5,000+" },
            { icon: CheckCircle, label: "Satisfaction Rate", value: "98%" },
            { icon: Zap, label: "Energy Savings Average", value: "28%" },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSix
          title="Complete HVAC Solutions for Your Home"
          description="From emergency repairs to energy-efficient new installations, we handle every aspect of your heating and cooling needs with professional expertise."
          tag="Our Services"
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Professional Installation",              description: "Expert installation of furnaces, air conditioners, heat pumps, and ventilation systems. We ensure optimal efficiency and longevity with precision workmanship.",              imageSrc: "http://img.b2bpic.net/free-photo/repairman-reconditioning-hvac-system_482257-80009.jpg",              imageAlt: "Professional HVAC system installation"},
            {
              id: 2,
              title: "Emergency Repair Service",              description: "24/7 emergency repairs when your system fails. Our experienced technicians diagnose and fix problems quickly to restore your comfort.",              imageSrc: "http://img.b2bpic.net/free-photo/team-replacing-old-air-conditioner_482257-78499.jpg",              imageAlt: "HVAC emergency repair technician"},
            {
              id: 3,
              title: "Preventive Maintenance",              description: "Regular tune-ups and maintenance plans that keep systems running efficiently, extend equipment life, and prevent costly breakdowns.",              imageSrc: "http://img.b2bpic.net/free-photo/distraught-auto-repairman-talking-his-manager-about-problematic-reports-workshop_637285-7578.jpg",              imageAlt: "Professional HVAC maintenance service"},
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          testimonials={[
            {
              id: "1",              name: "Margaret Johnson, Homeowner",              date: "Date: November 2024",              title: "Professional Excellence and Fair Pricing",              quote: "After getting quotes from three other companies, Elizabethtown Heating & Cooling provided the best value without compromising quality. Their technicians explained everything clearly, and the installation was completed ahead of schedule. Our new system has cut our winter heating bills by over 30%. They truly deserve their reputation as the trusted local expert.",              tag: "System Installation",              avatarSrc: "http://img.b2bpic.net/free-photo/smiley-man-looking-camera-holding-cup-coffee_23-2148306626.jpg",              avatarAlt: "Margaret Johnson",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-man-looking-camera-holding-cup-coffee_23-2148306626.jpg"},
            {
              id: "2",              name: "Robert Chen, Business Owner",              date: "Date: October 2024",              title: "Emergency Help When We Needed It Most",              quote: "Our furnace died on the coldest night of the year. We were desperate. Elizabethtown Heating & Cooling answered our emergency call, came out within the hour, and had us warm again by midnight. The technician was professional, courteous, and fixed the problem right. We've been customers ever since and recommend them to everyone.",              tag: "Emergency Repair",              avatarSrc: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-360.jpg",              avatarAlt: "Robert Chen",              imageSrc: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-360.jpg"},
            {
              id: "3",              name: "Susan & David Miller, Retirees",              date: "Date: September 2024",              title: "Ten Years of Reliable Service",              quote: "We've relied on Elizabethtown Heating & Cooling for over a decade. Their maintenance plans keep our system in perfect working order, and their technicians treat our home with respect. We appreciate the honest advice—they've never tried to sell us something we didn't need. This is the kind of local business you want to support.",              tag: "Preventive Maintenance",              avatarSrc: "http://img.b2bpic.net/free-photo/elder-couple-posing-photo_23-2148201328.jpg",              avatarAlt: "Susan and David Miller",              imageSrc: "http://img.b2bpic.net/free-photo/elder-couple-posing-photo_23-2148201328.jpg"},
            {
              id: "4",              name: "Jessica Rodriguez, Executive",              date: "Date: August 2024",              title: "Energy Efficiency That Saves Money",              quote: "I was concerned about energy bills in my new home. They performed a comprehensive efficiency audit, showed me exactly where heat was being lost, and recommended a high-efficiency system with financing options. The investment paid for itself in just four years through lower bills. Their expertise and transparency made all the difference.",              tag: "Energy Audit & Installation",              avatarSrc: "http://img.b2bpic.net/free-photo/charming-young-attractive-woman-sitting-lounge-zone-coworking-space-lying-couch-hold-laptop-laps-look-pleased-netbook-display-smiling-delighted-talking-videocall-working-freelance_197531-30338.jpg",              avatarAlt: "Jessica Rodriguez",              imageSrc: "http://img.b2bpic.net/free-photo/charming-young-attractive-woman-sitting-lounge-zone-coworking-space-lying-couch-hold-laptop-laps-look-pleased-netbook-display-smiling-delighted-talking-videocall-working-freelance_197531-30338.jpg"},
            {
              id: "5",              name: "Thomas Walsh, Homeowner",              date: "Date: July 2024",              title: "Trustworthy Local Business",              quote: "In a world of corporate chain contractors, Elizabethtown Heating & Cooling feels like the real deal. They're licensed, insured, and genuinely care about your home. They don't oversell or pressure you. For 35 years, they've built their reputation the right way. I'm proud to recommend them to friends.",              tag: "System Maintenance",              avatarSrc: "http://img.b2bpic.net/free-photo/smiley-man-looking-camera-holding-cup-coffee_23-2148306626.jpg",              avatarAlt: "Thomas Walsh",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-man-looking-camera-holding-cup-coffee_23-2148306626.jpg"},
            {
              id: "6",              name: "Patricia Norton, Homeowner",              date: "Date: June 2024",              title: "Worth Every Penny",              quote: "My old air conditioning system was on its last legs. Rather than just patching it temporarily, they recommended replacing it with a modern, efficient unit. The comfort improvement is amazing, and the energy savings prove they gave me honest advice. This is what customer service should look like.",              tag: "AC Replacement",              avatarSrc: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-360.jpg",              avatarAlt: "Patricia Norton",              imageSrc: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-360.jpg"},
          ]}
          title="What Our Clients Say"
          description="Read why homeowners throughout Elizabethtown and Lancaster County trust us with their most important comfort needs."
          tag="Customer Testimonials"
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="slide-up"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted Local Authority"
          description="Fully licensed and insured HVAC contractor serving Elizabethtown and Lancaster County with industry certifications and memberships."
          tag="Credentials & Affiliations"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "PA HVAC Contractor License #HV-001234",            "EPA Certified Technicians",            "NATE Certified Experts",            "General Liability Insured",            "Workman's Compensation Covered",            "Better Business Bureau Member",            "Local Chamber of Commerce"]}
          speed={40}
          showCard={true}
          tagAnimation="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions About Your HVAC System"
          sideDescription="Find answers to questions homeowners frequently ask about heating, cooling, repairs, and efficiency."
          textPosition="left"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How often should I have my HVAC system serviced?",              content: "We recommend professional maintenance at least twice yearly—spring for air conditioning and fall for heating. Regular tune-ups keep systems running efficiently, extend equipment life, and help catch small problems before they become expensive repairs. Many homeowners see 15-20% energy savings with regular maintenance."},
            {
              id: "2",              title: "How long does an HVAC system typically last?",              content: "Most furnaces and air conditioners last 15-20 years with proper maintenance. Heat pumps typically last 15-25 years. We can help you assess your system's age and efficiency to determine if repair or replacement makes the most financial sense for your situation."},
            {
              id: "3",              title: "What's the difference between repair and replacement?",              content: "If your system is under 10 years old and the repair cost is less than 50% of replacement, repair usually makes sense. For older systems (15+ years), frequent repairs often signal it's time to replace with a modern, efficient unit that will save money long-term on energy and repairs."},
            {
              id: "4",              title: "How can I improve my home's energy efficiency?",              content: "We offer free energy audits that identify where heating and cooling are being lost. Common improvements include upgrading to high-efficiency systems, sealing air leaks, improving insulation, and installing smart thermostats. Many upgrades qualify for utility rebates and tax credits."},
            {
              id: "5",              title: "Do you offer emergency service and financing?",              content: "Yes, we provide 24/7 emergency repair service for heating and cooling emergencies. We also offer flexible financing options on new system installations, making it easier to upgrade to an efficient system that saves money on monthly utility bills."},
            {
              id: "6",              title: "Why choose a local contractor over a national chain?",              content: "Local contractors like us invest in our community and build lasting relationships. We're accountable to our neighbors, provide personalized service, and our reputation is built on 35 years of fair pricing and quality work. We know the local climate, building codes, and can respond quickly to your needs."},
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Ready to Improve Your Comfort"
          title="Schedule Your System Check Today"
          description="Contact Elizabethtown Heating & Cooling to discuss your heating and cooling needs. Our expert technicians are ready to help with professional advice and service you can trust."
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email address"
          buttonText="Schedule Consultation"
          termsText="We respect your privacy and will contact you within one business day to confirm your appointment."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Company",              items: [
                { label: "About Us", href: "about" },
                { label: "Our Services", href: "services" },
                { label: "Testimonials", href: "testimonials" },
                { label: "Contact", href: "contact" },
              ],
            },
            {
              title: "Services",              items: [
                { label: "Installation", href: "#" },
                { label: "Repair & Maintenance", href: "#" },
                { label: "Energy Audits", href: "#" },
                { label: "Emergency Service", href: "#" },
              ],
            },
            {
              title: "Support",              items: [
                { label: "FAQ", href: "faq" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Sitemap", href: "#" },
              ],
            },
          ]}
          copyrightText="© 2025 Elizabethtown Heating & Cooling | PA License #HV-001234 | Serving Lancaster County Since 1989"
        />
      </div>
    </ThemeProvider>
  );
}
