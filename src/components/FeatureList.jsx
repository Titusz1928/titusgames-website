import FeatureCard from './FeatureCard';

function FeatureList({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <FeatureCard 
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          buttonText={item.buttonText}
          buttonLink={item.buttonLink}
          reverse={index % 2 !== 0} // Zigzag logic: 1st card normal, 2nd reversed
        />
      ))}
    </div>
  );
}

export default FeatureList;