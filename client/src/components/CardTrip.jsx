import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const CardTrip = (prop) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(prop.url)
      .then(() => {
        alert("URL คัดลอกเรียบร้อยแล้ว!");
      })
      .catch((err) => {
        console.error("ไม่สามารถคัดลอก URL ได้:", err);
      });
  };
  return (
    <div className="flex gap-10 w-full h-[250px]">
      <img
        src={prop.imgSrc[0]}
        alt={prop.title}
        className=" w-[350px] h-[250px] object-fill rounded-2xl shrink-0"
      />
      <div className=" flex flex-col gap-1 grow">
        <a href={prop.url} target="_blank">
          <h1 className=" text-[22px] font-medium">{prop.title} </h1>
        </a>
        <p className=" text-gray-500 ">{prop.description.slice(0, 100)} ..</p>
        <a
          className=" underline underline-offset-1 text-[#73b9e9] cursor-pointer"
          target="_blank"
          href={prop.url}
        >
          อ่านต่อ
        </a>
        <p className=" text-gray-500 flex gap-2">
          หมวด:{" "}
          {prop.tag.map((item, index) => {
            return (
              <span
                className=" underline underline-offset-1 cursor-default"
                key={index}
                onClick={() => {
                  prop.setKeywords((prev) => (prev ? `${prev} ${item}` : item));
                }}
              >
                {item}
              </span>
            );
          })}
        </p>

        <div className=" flex justify-between items-end">
          <div className=" w-[100px] h-[100px] flex gap-8 mt-4 ">
            <img
              src={prop.imgSrc[1]}
              alt=""
              className="rounded-xl object-cover"
            />
            <img
              src={prop.imgSrc[2]}
              alt=""
              className="rounded-xl object-cover"
            />
            <img
              src={prop.imgSrc[3]}
              alt=""
              className="rounded-xl object-cover"
            />
          </div>
          <HiOutlineClipboardDocumentList
            style={{ color: "#73b9e9", fontSize: "2em", marginRight: "1em" }}
            className=" cursor-pointer"
            onClick={handleCopy}
          />
        </div>
      </div>
    </div>
  );
};

export default CardTrip;
