import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle, XCircle, Share2, ArrowLeft } from 'lucide-react';
import { foods } from '../data/foods';

const FoodDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const food = foods.find(f => f.slug === slug);

  if (!food) {
    return <Navigate to="/" replace />;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Czy pies może jeść ${food.name.toLowerCase()}?`,
          text: food.overview,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link skopiowany do schowka!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        to="/" 
        className="inline-flex items-center text-gray-600 hover:text-orange-500 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Powrót do wyszukiwania
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Czy pies może jeść <span className="text-orange-500">{food.name.toLowerCase()}</span>?
      </h1>

      <div className="flex items-center justify-center gap-12 mb-8">
        <img
          src={food.image}
          alt={food.name}
          className="w-64 h-64 object-cover rounded-lg shadow-lg"
        />
        <div className="flex flex-col items-center">
          {food.isSafe ? (
            <>
              <CheckCircle className="w-24 h-24 text-green-500" />
              <span className="text-green-600 font-semibold mt-2">Bezpieczne</span>
            </>
          ) : (
            <>
              <XCircle className="w-24 h-24 text-red-500" />
              <span className="text-red-600 font-semibold mt-2">Niebezpieczne</span>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={handleShare}
          className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors"
        >
          <Share2 className="w-4 h-4 mr-1" /> Udostępnij
        </button>
      </div>

      <div className="bg-orange-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Podsumowanie</h2>
        <p className="text-gray-700 leading-relaxed">{food.overview}</p>
      </div>

      {food.risks && (
        <div className="bg-red-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-800 mb-4">Zagrożenia</h2>
          <p className="text-gray-700 leading-relaxed">{food.risks}</p>
        </div>
      )}

      {food.benefits && (
        <div className="bg-green-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-4">Korzyści</h2>
          <p className="text-gray-700 leading-relaxed">{food.benefits}</p>
        </div>
      )}
    </div>
  );
};

export default FoodDetail;