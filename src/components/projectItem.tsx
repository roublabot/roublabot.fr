import Image, { ImageProps } from 'next/image';

export type ProjectCardProps = ImageProps & {
  name: string;
  description: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  alt,
  ...imageProps
}) => {
  return (
    <li className="px-2 h-64 flex flex-col sm:flex-row col-span-1 bg-neutral-700 rounded-lg shadow hover:bg-neutral-600 hover:-translate-y-1 duration-300 items-center">
      <Image alt={alt} {...imageProps} />
      <div className="flex-1">
        <h2 className="text-xl">{name}</h2>
        <div className="text-neutral-300">{description}</div>
      </div>
    </li>
  );
};
