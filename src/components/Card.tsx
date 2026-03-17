const Card = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`bg-cream-50 border border-cream-300/30 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card