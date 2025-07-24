import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        navigate('/signin');
      }
      return data;
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const images = [
    'https://egedesonsozcom.teimg.com/crop/1280x720/egedesonsoz-com/uploads/2025/07/ev-anahtar-depo-2383227-1.jpg',
    'https://emsal.com/wp-content/uploads/2024/12/gayrimenkul-1-scaled.webp',
    'https://www.lidergd.com/images/gayrimenkul-degerleme-sm.jpg',
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }
  }, [currentIndex]);
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="relative w-full overflow-hidden w-1/2 h-full">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out w-full h-full "
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full flex-shrink-0 object-cover"
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white px-3 py-2 rounded-full shadow"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white px-3 py-2 rounded-full shadow"
        >
          ›
        </button>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center p-20">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#ffd700]">
          SignUp
        </h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            name="username"
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md p-2"
            type="text"
            placeholder="Kullanıcı Adı"
          />
          <input
            name="email"
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md p-2"
            type="email"
            placeholder="E-posta"
          />
          <input
            name="password"
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md p-2"
            type="password"
            placeholder="Şifre"
          />
          <button
            className="block bg-[#cfb53b] text-center py-2 px-4 rounded-md hover:bg-[#ffd700] transition-colors duration-200"
            type="submit"
          >
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
  );
}
