import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <div className="flex flex-col gap-4">
          <Button size="small" shape="rounded-sm" label="Small Button" />
          <Button size="medium" shape="rounded-md" label="Medium Button" />

          <Button size="large" shape="rounded-full" label="Large Button" />
        </div>
        <Card
          title="About page Card"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem maxime? Sit deserunt repellat ducimus omnis officia quod, numquam non."
        />
      </div>
    </div>
  );
};
export default About;
