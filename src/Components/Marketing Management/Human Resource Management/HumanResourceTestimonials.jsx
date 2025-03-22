import React, { useState, useEffect } from 'react';

// Import images from the 'src' folder
import vikramImage from '../../../assets/Images/user.png';
import simranImage from '../../../assets/Images/user.png';
import arjunImage from '../../../assets/Images/user.png';
import meeraImage from '../../../assets/Images/user.png';
import karanImage from '../../../assets/Images/user.png';
import nishaImage from '../../../assets/Images/user.png';
import aartiImage from '../../../assets/Images/user.png';

const testimonials = [
  {
    name: "Vikram Singh - Junior HR Manager",
    department: "Human Resource Management",
    year: "Batch-24",
    text: '"HRM at Indira University equipped me with essential leadership and communication skills. The faculty was very supportive in every phase of my academic journey."',
    image: vikramImage,
  },
  {
    name: "Simran Kaur - HR Intern",
    department: "Human Resource Management",
    year: "Batch-23",
    text: '"The exposure to real-world HR projects and internships helped me land a job at a leading HR firm straight out of college! The curriculum is well-structured."',
    image: simranImage,
  },
  {
    name: "Arjun Rao - HR Manager Trainee",
    department: "Human Resource Management",
    year: "Batch-25",
    text: '"The infrastructure and faculty support at Indira University was amazing! The HRM program prepared me well for my career with hands-on experiences and modern tools."',
    image: arjunImage,
  },
  {
    name: "Meera Patel - Human Resource Intern",
    department: "Human Resource Management",
    year: "Batch-24",
    text: '"The focus on real-world HR practices and exposure to industry trends has been invaluable to my career progression!"',
    image: meeraImage,
  },
  {
    name: "Karan Desai - HR Consultant Intern",
    department: "Human Resource Management",
    year: "Batch-24",
    text: '"The guidance and mentorship I received during my time at ICEM gave me the confidence to take on HR leadership roles early in my career."',
    image: karanImage,
  },
  {
    name: "Nisha Gupta - Senior HR Executive",
    department: "Human Resource Management",
    year: "Batch-25",
    text: '"ICEM’s HR program provided me with comprehensive training, making me industry-ready. The faculty ensured I was always updated with the latest HR trends."',
    image: nishaImage,
  },
  {
    name: "Aarti Sharma - HR Specialist",
    department: "Human Resource Management",
    year: "Batch-25",
    text: '"The industry exposure and internships at ICEM were instrumental in shaping my career. I received the right skills to thrive in HR roles."',
    image: aartiImage,
  },
  {
    name: "Vikram Singh - Junior HR Manager",
    department: "Human Resource Management",
    year: "Batch-24",
    text: '"HRM at Indira University equipped me with essential leadership and communication skills. The faculty was very supportive in every phase of my academic journey."',
    image: vikramImage,
  },
  {
    name: "Simran Kaur - HR Intern",
    department: "Human Resource Management",
    year: "Batch-23",
    text: '"The exposure to real-world HR projects and internships helped me land a job at a leading HR firm straight out of college! The curriculum is well-structured."',
    image: simranImage,
  },
  {
    name: "Arjun Rao - HR Manager Trainee",
    department: "Human Resource Management",
    year: "Batch-25",
    text: '"The infrastructure and faculty support at Indira University was amazing! The HRM program prepared me well for my career with hands-on experiences and modern tools."',
    image: arjunImage,
  },
  {
    name: "Meera Patel - Human Resource Intern",
    department: "Human Resource Management",
    year: "Batch-24",
    text: '"The focus on real-world HR practices and exposure to industry trends has been invaluable to my career progression!"',
    image: meeraImage,
  },
  {
    name: "Karan Desai - HR Consultant Intern",
    department: "Human Resource Management",
    year: "Batch-24",
    text: '"The guidance and mentorship I received during my time at ICEM gave me the confidence to take on HR leadership roles early in my career."',
    image: karanImage,
  },
  {
    name: "Nisha Gupta - Senior HR Executive",
    department: "Human Resource Management",
    year: "Batch-25",
    text: '"ICEM’s HR program provided me with comprehensive training, making me industry-ready. The faculty ensured I was always updated with the latest HR trends."',
    image: nishaImage,
  },
  {
    name: "Aarti Sharma - HR Specialist",
    department: "Human Resource Management",
    year: "Batch-25",
    text: '"The industry exposure and internships at ICEM were instrumental in shaping my career. I received the right skills to thrive in HR roles."',
    image: aartiImage,
  },
  // Add more testimonials if needed
];

const Testimonials = () => {
  const [activeDot, setActiveDot] = useState(0);

  // Divide testimonials into groups of 4
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 4) {
    groupedTestimonials.push(testimonials.slice(i, i + 4));
  }

  // Set up automated sliding of testimonials every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveDot((prevDot) => (prevDot + 1) % groupedTestimonials.length);
    }, 3000); // Change every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [groupedTestimonials.length]);

  return (
    <div className="overflow-hidden w-full py-8">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>

      {/* Testimonials */}
      <div className="flex space-x-8 w-full overflow-x-auto py-4">
        {groupedTestimonials[activeDot].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg flex-1 min-w-[250px] max-w-xs mx-4 flex-shrink-0"
            style={{
              boxShadow: "0 2px 4px rgba(42, 157, 100, 0.4)", // Emerald Green shadow color
            }}
          >
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
            <p className="text-center text-sm text-[#2A9D64]">{testimonial.department}</p>
            <p className="text-center text-sm text-[#2A9D64]">{testimonial.year}</p>
            <p className="text-center text-black mt-4">{testimonial.text}</p>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-4 mt-2">
        {groupedTestimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${activeDot === index ? 'bg-[#2A9D64]' : 'bg-gray-300'}`} // Emerald Green active dot
            onClick={() => setActiveDot(index)}
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-center pt-4 text-[#2A9D64]">What Our Students Say</h1> {/* Heading color set to Emerald Green */}
      <Testimonials />
    </div>
  );
}

export default App;
