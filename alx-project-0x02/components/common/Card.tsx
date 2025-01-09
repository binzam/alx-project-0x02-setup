import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="max-w-xl mx-auto w-full p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default Card;
