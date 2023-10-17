interface Props {
  data: { title: string; plot: string; stack: string; image: string };
}

export const Card = ({ data }: Props): JSX.Element => {
  return (
    <div>
      <div className="group relative rounded-lg overflow-hidden bg-white shadow-lg  hover:shadow-2xl ">
        <div className="h-40">
          <img src={data.image} alt="City" className="h-40 w-full object-cover object-center " />
        </div>
        <div className="h-1/2 p-4 ">
          <h3 className="mb-2 text-base font-semibold text-blue-800">
            <a href="" className="hover:underline">
              {data.title}
            </a>
          </h3>
          <div className="font-bold text-xs mt-2">
            <p>{data.plot}</p>
            <p>{data.stack}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
