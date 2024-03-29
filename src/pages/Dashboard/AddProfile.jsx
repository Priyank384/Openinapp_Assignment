import React, { useState } from "react";
import toast from "react-hot-toast";

export default function AddProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [firstContent, setFirstContent] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [insta, setInsta] = useState("");
  const [youtube, setYoutube] = useState("");

  const [updated, setUpdated] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDone = () => {
    if (
      name.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      insta.length === 0 ||
      youtube.length === 0
    ) {
      setIsOpen(true);
      setUpdated(false);
      toast.error("Please fill all the fields!", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <div className="xl:w-[480px] lg:w-[430px] max-xs:w-[320px] sm:w-[360px] h-[256px] flex-shrink-0 rounded-[20px] border-[2px] border-[#e0e0e0] bg-white lg:ml-[40px] flex justify-center items-center lg:mt-0 max-xs:mt-10 lg:shadow-none max-xs:shadow-xl">
        {updated ? (
          <div className="h-[256px] w-[480px]">
            <div className="mt-[48px] mb-[58px] text-black font-figtree text-[24px] font-semibold leading-[24px] ml-[41px]">
              <span className="">{name}</span>
            </div>
            <div className="">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="flex w-[28px] h-[28px] pt-[5px] pr-[5px] pb-[6px] pl-[6px] justify-center items-center rounded-[184px] bg-[#e9f9eb] ml-[39px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M1.24686 15.2892L1.24692 15.2891L2.28127 12.2462C1.46158 10.8627 1.12156 9.24676 1.31482 7.64943C1.50995 6.03671 2.23755 4.53517 3.38238 3.38264L3.38277 3.38225C4.74209 2.02896 6.5821 1.2692 8.5002 1.2692C10.4183 1.2692 12.2583 2.02896 13.6176 3.38225L13.6183 3.38291C14.8165 4.59839 15.5479 6.19737 15.6839 7.89875C15.8199 9.60012 15.3518 11.295 14.3618 12.6854C13.3719 14.0757 11.9235 15.0726 10.2712 15.5008C8.62973 15.9262 6.89145 15.7631 5.35813 15.0406L1.66646 15.77L1.65686 15.7719H1.64707L1.59421 15.7719L1.59395 15.7719M1.24686 15.2892L1.59395 15.6719V15.7719M1.24686 15.2892C1.22826 15.3443 1.22306 15.403 1.23169 15.4605C1.24032 15.518 1.26254 15.5726 1.2965 15.6198C1.33046 15.667 1.37518 15.7054 1.42696 15.7319C1.47866 15.7583 1.5359 15.772 1.59395 15.7719M1.24686 15.2892L1.59395 15.7719M5.40627 14.2836L5.39233 14.2835L5.3789 14.2872L5.33468 14.2995L2.1454 14.9343L3.03521 12.3124C3.03524 12.3123 3.03527 12.3122 3.0353 12.3122C3.05308 12.2604 3.05904 12.2054 3.05272 12.151C3.0464 12.0967 3.02795 12.0444 2.99874 11.9981C2.20966 10.7443 1.86809 9.26032 2.0296 7.78767C2.19111 6.31511 2.84614 4.94053 3.88813 3.88754C4.49373 3.28186 5.21271 2.80139 6.00401 2.47358C6.79539 2.14573 7.6436 1.97699 8.5002 1.97699C9.3568 1.97699 10.205 2.14573 10.9964 2.47358C11.7877 2.80139 12.5067 3.28186 13.1123 3.88754C14.202 4.98514 14.8664 6.4342 14.987 7.97621C15.1075 9.51825 14.6763 11.053 13.7703 12.3066C12.8642 13.5602 11.5423 14.4512 10.0403 14.8205C8.53849 15.1899 6.95428 15.0137 5.57027 14.3235C5.51946 14.2976 5.4633 14.2839 5.40627 14.2836Z"
                        fill="#3CC952"
                        stroke="#3CC952"
                        stroke-width="0.2"
                      />
                      <path
                        d="M10.1494 12.3183L10.1494 12.3182C9.42103 12.2386 8.60837 11.8414 7.92168 11.4099C7.23293 10.9772 6.65743 10.5014 6.40082 10.2502L6.40006 10.2495C6.14824 9.99764 5.67155 9.42175 5.23857 8.7318C4.80679 8.04375 4.40954 7.22838 4.33135 6.4999L4.43077 6.48923M10.1494 12.3183L6.87718 4.33235M10.1494 12.3183L10.1549 12.3186C10.2396 12.3232 10.3244 12.3232 10.4091 12.3187C10.7956 12.3048 11.1746 12.2084 11.5207 12.0358C11.8669 11.8632 12.1721 11.6184 12.4158 11.318M10.1494 12.3183L12.4158 11.318M4.43077 6.48923L4.33136 6.50002C4.20356 5.32206 4.98924 4.52719 5.32479 4.24298C5.4912 4.10016 5.70577 4.0261 5.92484 4.03587L6.64145 4.05975L6.64182 4.05977C6.71401 4.06244 6.78379 4.08644 6.84236 4.12874C6.90087 4.17099 6.94556 4.22962 6.97081 4.29724M4.43077 6.48923C4.58218 7.8997 5.97937 9.68735 6.47077 10.1788L5.92093 4.13579C5.72697 4.127 5.53696 4.19256 5.38968 4.31907C5.06031 4.59798 4.30859 5.36298 4.43077 6.48923ZM6.97081 4.29724C6.97083 4.2973 6.97086 4.29736 6.97088 4.29742L6.87718 4.33235M6.97081 4.29724C6.97079 4.29717 6.97076 4.29711 6.97074 4.29705L6.87718 4.33235M6.97081 4.29724C7.05076 4.50911 7.21991 4.96728 7.36923 5.41856C7.44388 5.64417 7.51394 5.86917 7.56545 6.06133C7.6159 6.24951 7.65187 6.41774 7.65187 6.52376C7.65187 6.71419 7.56744 6.87706 7.4584 7.01533C7.35014 7.15261 7.21014 7.27473 7.08674 7.38238L7.08636 7.38271L7.08539 7.38355L7.08538 7.38355C7.05172 7.41216 7.0119 7.44716 6.97751 7.47935M6.87718 4.33235C7.03656 4.7547 7.55187 6.15985 7.55187 6.52376C7.55187 6.84251 7.27031 7.08954 7.02062 7.30735C6.96749 7.35251 6.89577 7.41626 6.85327 7.46142M6.97751 7.47935C6.96523 7.45743 6.95306 7.43546 6.941 7.41341L6.85327 7.46142M6.97751 7.47935C6.95789 7.4977 6.94004 7.51514 6.92609 7.52995L6.85327 7.46142M6.97751 7.47935C7.23387 7.93693 7.53735 8.36654 7.88304 8.76118M6.85327 7.46142C7.12174 7.95204 7.4433 8.41167 7.81218 8.83204M7.81218 8.83204L7.87813 8.75687C7.87977 8.75831 7.8814 8.75974 7.88304 8.76118M7.81218 8.83204C8.23259 9.20087 8.69222 9.52243 9.18281 9.79095M7.81218 8.83204L7.88735 8.76608C7.88591 8.76445 7.88448 8.76281 7.88304 8.76118M7.88304 8.76118C8.27739 9.10653 8.70662 9.4098 9.16376 9.66608M9.18281 9.79095L9.1121 9.72024C9.12742 9.70491 9.14517 9.68618 9.16376 9.66608M9.18281 9.79095C9.22466 9.7491 9.28248 9.68442 9.32667 9.635C9.33016 9.6311 9.33357 9.6273 9.33687 9.6236M9.18281 9.79095L9.23082 9.70323C9.2084 9.69096 9.18604 9.67857 9.16376 9.66608M9.16376 9.66608C9.19337 9.63405 9.22512 9.59855 9.25264 9.56778C9.25579 9.56426 9.25888 9.56079 9.26191 9.5574M9.33687 9.6236L9.26151 9.55787L9.26191 9.5574M9.33687 9.6236C9.55468 9.37392 9.80171 9.09235 10.1337 9.09235C10.4977 9.09235 11.9028 9.60767 12.3252 9.76704M9.33687 9.6236L9.26234 9.55692C9.2622 9.55708 9.26206 9.55724 9.26191 9.5574M9.26191 9.5574L9.26199 9.55731C9.3696 9.43397 9.49185 9.29382 9.63104 9.18544C9.77165 9.07596 9.9376 8.99235 10.1337 8.99235C10.2398 8.99235 10.408 9.02833 10.5962 9.07877C10.7883 9.13028 11.0133 9.20035 11.2389 9.27499C11.6904 9.42435 12.1487 9.59356 12.3605 9.67348M12.3252 9.76704L12.3601 9.67334C12.3602 9.67339 12.3603 9.67343 12.3605 9.67348M12.3252 9.76704L12.3605 9.67348M12.3252 9.76704L12.4158 11.318M12.3605 9.67348C12.428 9.69874 12.4865 9.74341 12.5288 9.80186C12.5711 9.86043 12.5951 9.93021 12.5977 10.0024L12.5978 10.0028L12.6217 10.72L12.6217 10.7205C12.6278 10.938 12.5546 11.1504 12.4158 11.318M7.02709 9.82836L6.93014 9.72906C6.71638 9.51012 6.2823 8.98643 5.88513 8.36169C5.48637 7.73447 5.13456 7.02028 5.06941 6.41739L5.0694 6.41723C4.97969 5.59991 5.54549 5.01955 5.80637 4.80016C5.83714 4.77572 5.87562 4.76301 5.91492 4.76433L6.38076 4.78063C6.60376 5.34529 6.78557 5.92537 6.92476 6.51633C6.92049 6.52365 6.91412 6.53315 6.9052 6.54482C6.88375 6.57287 6.85318 6.60622 6.81743 6.64198C6.75824 6.70117 6.69145 6.76048 6.64066 6.80559C6.6301 6.81496 6.62024 6.82372 6.61128 6.83174L6.61128 6.83173L6.61065 6.83231C6.60564 6.83687 6.60063 6.84143 6.59563 6.84597C6.49961 6.93331 6.4062 7.01827 6.33709 7.10604C6.26247 7.2008 6.20874 7.30775 6.20874 7.43751C6.20874 7.4967 6.22742 7.56458 6.25274 7.63195C6.27887 7.70147 6.31567 7.77963 6.3593 7.86229C6.44664 8.02775 6.56489 8.21793 6.69027 8.4044C6.93972 8.77542 7.22567 9.14398 7.36428 9.2826C7.50261 9.42092 7.86885 9.70872 8.23945 9.96034C8.42561 10.0867 8.61587 10.2061 8.7822 10.2942C8.8653 10.3383 8.9441 10.3754 9.01452 10.4018C9.08295 10.4274 9.15172 10.4461 9.21202 10.4461C9.34485 10.4461 9.45371 10.3932 9.54947 10.3178C9.64261 10.2444 9.72994 10.1444 9.81865 10.0426C9.82363 10.0369 9.82891 10.0308 9.83447 10.0244C9.88041 9.97158 9.94495 9.89732 10.0087 9.83328C10.0446 9.79726 10.0777 9.76703 10.1051 9.74648C10.1157 9.73855 10.1241 9.73305 10.1304 9.72943C10.7224 9.86866 11.3034 10.0507 11.8689 10.2741L11.8852 10.7399C11.8852 10.74 11.8852 10.74 11.8852 10.7401M7.02709 9.82836L11.8852 10.7401M7.02709 9.82836C7.28209 10.0604 7.7454 10.4285 8.28405 10.7696C8.91365 11.1684 9.63051 11.5203 10.2295 11.5854C11.0495 11.6726 11.6298 11.1069 11.8495 10.8483M7.02709 9.82836L11.8495 10.8483M11.8852 10.7401C11.8865 10.7792 11.8738 10.8176 11.8495 10.8483M11.8852 10.7401L11.8495 10.8483"
                        fill="#3CC952"
                        stroke="#3CC952"
                        stroke-width="0.2"
                      />
                    </svg>
                  </div>
                  <span className="text-[#231f20] font-figtree text-[14px] font-normal leading-[24px] underline ml-[12px]">
                    {phone}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex w-[28px] h-[28px] p-[4.667px] justify-center items-center rounded-[164px] bg-[#ffe9ec]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M11.9997 2.99872C12.7947 3.0011 13.5564 3.31795 14.1185 3.88009C14.6807 4.44222 14.9975 5.20396 14.9999 5.99893V11.9987C14.9975 12.7937 14.6807 13.5554 14.1185 14.1176C13.5564 14.6797 12.7947 14.9966 11.9997 14.9989H5.99991C5.20494 14.9966 4.4432 14.6797 3.88106 14.1176C3.31893 13.5554 3.00207 12.7937 2.9997 11.9987V5.99893C3.00207 5.20396 3.31893 4.44222 3.88106 3.88009C4.4432 3.31795 5.20494 3.0011 5.99991 2.99872H11.9997ZM11.9997 1.79883H5.99991C3.6898 1.79883 1.7998 3.68883 1.7998 5.99893V11.9987C1.7998 14.3088 3.6898 16.1988 5.99991 16.1988H11.9997C14.3098 16.1988 16.1998 14.3088 16.1998 11.9987V5.99893C16.1998 3.68883 14.3098 1.79883 11.9997 1.79883Z"
                        fill="#FF4E64"
                      />
                      <path
                        d="M12.632 6.23574C12.4604 6.23574 12.2926 6.18484 12.1499 6.08947C12.0072 5.99411 11.8959 5.85857 11.8302 5.69999C11.7645 5.5414 11.7474 5.36691 11.7808 5.19856C11.8143 5.03021 11.897 4.87557 12.0184 4.75419C12.1397 4.63282 12.2944 4.55016 12.4627 4.51668C12.6311 4.48319 12.8056 4.50038 12.9642 4.56606C13.1227 4.63175 13.2583 4.74299 13.3536 4.88571C13.449 5.02843 13.4999 5.19622 13.4999 5.36787C13.5001 5.48191 13.4779 5.59487 13.4343 5.70028C13.3908 5.80568 13.3269 5.90145 13.2463 5.98209C13.1656 6.06273 13.0698 6.12665 12.9644 6.17017C12.859 6.2137 12.7461 6.23598 12.632 6.23574ZM8.87138 6.81411C9.32912 6.81411 9.77659 6.94985 10.1572 7.20416C10.5378 7.45847 10.8344 7.81993 11.0096 8.24284C11.1848 8.66574 11.2306 9.13109 11.1413 9.58005C11.052 10.029 10.8316 10.4414 10.5079 10.7651C10.1842 11.0887 9.77185 11.3092 9.3229 11.3985C8.87394 11.4878 8.40859 11.4419 7.98569 11.2668C7.56278 11.0916 7.20132 10.795 6.94701 10.4143C6.6927 10.0337 6.55696 9.58627 6.55696 9.12853C6.55761 8.51491 6.80166 7.92661 7.23556 7.49271C7.66946 7.05882 8.25776 6.81476 8.87138 6.81411ZM8.87138 5.65705C8.18478 5.65705 7.51361 5.86065 6.94273 6.2421C6.37185 6.62355 5.9269 7.16572 5.66415 7.80005C5.40141 8.43438 5.33266 9.13238 5.46661 9.80578C5.60055 10.4792 5.93118 11.0977 6.41667 11.5832C6.90217 12.0687 7.52073 12.3993 8.19412 12.5333C8.86752 12.6672 9.56552 12.5985 10.1998 12.3357C10.8342 12.073 11.3763 11.6281 11.7578 11.0572C12.1392 10.4863 12.3428 9.81512 12.3428 9.12853C12.3428 8.20783 11.9771 7.32485 11.3261 6.67383C10.675 6.0228 9.79207 5.65705 8.87138 5.65705Z"
                        fill="#FF4E64"
                      />
                    </svg>
                  </div>
                  <span className="text-[#231f20] font-figtree text-[14px] font-normal leading-[24px] underline ml-[12px] mr-[80px]">
                    {insta}
                  </span>
                </div>
              </div>
              <div className="flex justify-between mt-[22px]">
                <div className="flex items-center">
                  <div className="flex w-[28px] h-[28px] p-[5px] justify-center items-center rounded-[184px] bg-[#ebe6f9] ml-[39px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4.875 8.25002L10.3666 11.8147C11.3601 12.4596 12.6399 12.4596 13.6334 11.8147L19.125 8.25002M4.875 8.25002L4.875 15.75C4.875 16.5784 5.54657 17.25 6.375 17.25L17.625 17.25C18.4534 17.25 19.125 16.5784 19.125 15.75V8.25002M4.875 8.25002C4.875 7.42159 5.54657 6.75001 6.375 6.75001L17.625 6.75C18.4534 6.75 19.125 7.42159 19.125 8.25002"
                        stroke="#5C33CF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[#231f20] font-figtree text-[14px] font-normal leading-[24px] underline ml-[12px]">
                    {email}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex w-[28px] h-[28px] p-[4px] justify-center items-center rounded-[164px] bg-[#ffe9e9]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_5_6407)">
                        <path
                          d="M16.8852 4.80046L16.8854 4.80129C17.0556 5.43018 17.1496 6.43528 17.1988 7.3185C17.223 7.75275 17.2358 8.1453 17.2426 8.42931C17.246 8.5712 17.2478 8.68573 17.2488 8.76449L17.2498 8.8547L17.25 8.87767L17.25 8.88328L17.25 8.88442L17.25 8.89005L17.2499 8.9131L17.2493 9.00362C17.2486 9.08265 17.2472 9.19755 17.2443 9.33985C17.2386 9.62469 17.2272 10.0182 17.2044 10.4531C17.1579 11.3381 17.0665 12.3417 16.8969 12.9634L16.8965 12.9653C16.7406 13.5455 16.2798 14.0063 15.6995 14.1622L15.6977 14.1627C15.4108 14.2409 14.8598 14.3083 14.1519 14.3607C13.4583 14.4121 12.6553 14.4466 11.8899 14.4696C11.1254 14.4927 10.4025 14.5042 9.87053 14.51C9.60464 14.5128 9.38667 14.5143 9.23532 14.515L9.06064 14.5156L9.01519 14.5157L9.0037 14.5157L9.00086 14.5157H9.00018H9.00003L9 15.0157L8.99997 14.5157H8.99982H8.99914L8.9963 14.5157L8.98481 14.5157L8.93936 14.5156L8.76468 14.515C8.61333 14.5143 8.39536 14.5128 8.12947 14.51C7.59749 14.5042 6.87464 14.4927 6.1101 14.4696C5.34474 14.4466 4.54169 14.4121 3.8481 14.3607C3.14016 14.3083 2.58921 14.2409 2.30229 14.1627L2.30046 14.1622C1.72018 14.0063 1.25944 13.5455 1.10355 12.9653L1.10332 12.9644C0.933444 12.3364 0.842057 11.3321 0.795645 10.4488C0.772831 10.0147 0.761404 9.6222 0.75569 9.33824C0.752836 9.19638 0.751413 9.08188 0.750704 9.00314L0.750086 8.91297L0.75001 8.89001L0.750001 8.88441L0.75 8.88312L0.75 8.88289V8.88286V8.88286V8.88283L0.75 8.88259L0.750001 8.8813L0.75001 8.87568L0.750083 8.85269L0.750683 8.76247C0.751371 8.6837 0.752752 8.56919 0.755521 8.42736C0.761064 8.14347 0.772148 7.7512 0.794279 7.31757C0.839277 6.43589 0.927877 5.43417 1.09256 4.81077C1.2487 4.23093 1.70925 3.77059 2.28923 3.61478L2.28923 3.61478L2.29106 3.61428C2.57839 3.53592 3.1297 3.46791 3.83761 3.41443C4.53128 3.36203 5.33439 3.32616 6.09977 3.30169C6.86435 3.27726 7.58723 3.26432 8.11923 3.25751C8.38512 3.2541 8.6031 3.25222 8.75445 3.2512L8.92914 3.25021L8.9746 3.25004L8.98609 3.25001L8.98893 3.25L8.98895 3.25L8.98963 3.25L8.99247 3.25L9.00396 3.25001L9.04941 3.25009L9.22409 3.25072C9.37544 3.25144 9.5934 3.25288 9.85929 3.25576C10.3913 3.26153 11.1141 3.27307 11.8787 3.29611C12.644 3.31917 13.4471 3.35365 14.1407 3.40501C14.8486 3.45743 15.3996 3.5248 15.6865 3.60305L15.6883 3.60354C16.2686 3.75944 16.7293 4.22018 16.8852 4.80046Z"
                          stroke="#FF0000"
                        />
                        <path
                          d="M8.5 7.93426L10.0986 9L8.5 10.0657V7.93426Z"
                          fill="#999CA0"
                          stroke="#FF0000"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5_6407">
                          <rect
                            width="17.5"
                            height="17.5"
                            fill="white"
                            transform="translate(0.25 0.25)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-[#231f20] font-figtree text-[14px] font-normal leading-[24px] underline ml-[12px] mr-[80px]">
                    {youtube}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex w-[82px] h-[116.784px] flex-col justify-center items-center gap-[16px] flex-shrink-0">
            <div
              className="abc w-[76.784px] h-[76.784px] rounded-full bg-[#f5f5f5] flex justify-center items-center cursor-pointer"
              onClick={openModal}
            >
              <img
                className="w-[51.189px] h-[51.189px]"
                src="./images/Controls.svg"
                alt=""
              />
            </div>
            <p className="text-[#858585] font-figtree text-[16px] font-semibold leading-[24px] m-0">
              Add Profile
            </p>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            // onClick={closeModal}
          ></div>

          {/* Modal Container */}
          <div className="bg-[#fff] lg:w-[544px] max-xs:w-[80%] rounded-[16px] shadow-lg z-50">
            {/* Modal Header */}
            <div className="flex lg:w-[544px] max-xs:w-[100%] h-[64px] pt-[16px] flex-col justify-around items-center flex-shrink-0">
              <div className="flex items-center justify-between self-stretch py-[0px] px-[24px]">
                <div className="flex w-[252px] flex-col justify-center self-stretch">
                  <span className="text-[#231f20] font-figtree text-[20px] font-semibold leading-[32px]">
                    Add New Profile
                  </span>
                </div>
                <button
                  className="flex p-[4] items-center rounded-[8px] bg-white"
                  onClick={closeModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M5.25 5.75L12 12.5M12 12.5L5.25 19.25M12 12.5L18.75 19.25M12 12.5L18.75 5.75"
                      stroke="#999CA0"
                      stroke-width="0.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="lg:w-[544px] max-xs:w-[100%] h-[1px] bg-[#f2f2f2]"></div>
            </div>

            {/* Content Placeholder */}

            <div className="flex lg:w-[544px] max-xs:w-[100%] flex-col gap-[24px] flex-shrink-0 py-[24px] pl-[24px]">
              <div className="lg:w-[480px] max-xs:w-[80%] h-[40px] flex justify-between">
                <div
                  className="flex flex-col items-center justify-between w-[100%]"
                  onClick={() => setFirstContent(true)}
                >
                  <span className="text-[#231f20] font-figtree text-[16px] font-semibold leading-[24px]">
                    Basic
                  </span>
                  <div
                    className={`lg:w-[213.418px] max-xs:w-[100%] h-[4px] rounded-[30px] ${
                      firstContent ? "bg-[#3f84f8]" : "bg-[#d9d9d9]"
                    }`}
                  ></div>
                </div>

                <div
                  className="flex flex-col items-center justify-between w-[100%]"
                  onClick={() => setFirstContent(false)}
                >
                  <span className="text-[#231f20] font-figtree text-[16px] font-semibold leading-[24px]">
                    Social
                  </span>
                  <div
                    className={`lg:w-[213.418px] w-[100%] h-[4px] rounded-[30px] ${
                      firstContent ? "bg-[#d9d9d9]" : "bg-[#3f84f8]"
                    }`}
                  ></div>
                </div>
              </div>

              {firstContent ? (
                <div className="">
                  <div className="flex flex-col items-start gap-[16px]">
                    <div className="flex lg:w-[496px] max-xs:w-[85%] flex-col items-start gap-[8px]">
                      <label className="self-stretch text-[#231f20] font-figtree text-[16px] font-normal leading-[24px]">
                        Enter Name*
                      </label>
                      <div className="flex py-[12px] px-[16px] flex-col items-start self-stretch rounded-[8px] ring-1 ring-[#f2f2f2] bg-[#fff]">
                        <input
                          required
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          className="self-stretch text-[#999ca0] placeholder-[#999ca0] font-figtree text-[16px] font-normal leading-[24px] outline-none"
                          placeholder="Eg. John Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-[16px] mt-[24px]">
                    <div className="flex lg:w-[496px] max-xs:w-[85%] flex-col items-start gap-[8px]">
                      <label className="self-stretch text-[#231f20] font-figtree text-[16px] font-normal leading-[24px]">
                        Enter Email*
                      </label>
                      <div className="flex py-[12px] px-[16px] justify-between items-center self-stretch rounded-[8px] ring-1 ring-[#f2f2f2] bg-[#fff]">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          className="self-stretch text-[#999ca0] placeholder-[#999ca0] font-figtree text-[16px] font-normal leading-[24px] outline-none w-[80%] h-[24px]"
                          placeholder="Eg. John@xyz.com"
                        />
                        <button className="w-[24px] h-[24px] bg-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                          >
                            <path
                              d="M12.5 6.25L8 10.75L3.5 6.25"
                              stroke="#999CA0"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-[16px] mt-[24px]">
                    <div className="flex lg:w-[496px] max-xs:w-[85%] flex-col items-start gap-[8px]">
                      <label className="self-stretch text-[#231f20] font-figtree text-[16px] font-normal leading-[24px]">
                        Enter Phone*
                      </label>
                      <div className="flex py-[12px] px-[16px] justify-between items-center self-stretch rounded-[8px] ring-1 ring-[#f2f2f2] bg-[#fff]">
                        <input
                          type="number"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          className="self-stretch text-[#999ca0] placeholder-[#999ca0] font-figtree text-[16px] font-normal leading-[24px] outline-none w-[80%] h-[24px]"
                          placeholder="Eg. 9123456789"
                        />
                        <button className="w-[24px] h-[24px] bg-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                          >
                            <path
                              d="M12.5 6.25L8 10.75L3.5 6.25"
                              stroke="#999CA0"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="">
                  <div className="flex flex-col items-start gap-[16px]">
                    <div className="flex lg:w-[496px] max-xs:w-[85%] flex-col items-start gap-[8px]">
                      <label className="self-stretch text-[#231f20] font-figtree text-[16px] font-normal leading-[24px]">
                        <span className="">Instagram Link </span>
                        <span className="text-[#999ca0]">(Optional)</span>
                      </label>
                      <div className="flex py-[12px] px-[16px] flex-col items-start self-stretch rounded-[8px] ring-1 ring-[#f2f2f2] bg-[#fff]">
                        <input
                          type="url"
                          value={insta}
                          onChange={(e) => {
                            setInsta(e.target.value);
                          }}
                          className="self-stretch text-[#999ca0] placeholder-[#999ca0] font-figtree text-[16px] font-normal leading-[24px] outline-none"
                          placeholder="Eg. ..instagram.com/username"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-[16px] mt-[24px]">
                    <div className="flex lg:w-[496px] max-xs:w-[85%] flex-col items-start gap-[8px]">
                      <label className="self-stretch text-[#231f20] font-figtree text-[16px] font-normal leading-[24px]">
                        <span className="">Youtube Link </span>
                        <span className="text-[#999ca0]">(Optional)</span>
                      </label>
                      <div className="flex py-[12px] px-[16px] justify-between items-center self-stretch rounded-[8px] ring-1 ring-[#f2f2f2] bg-[#fff]">
                        <input
                          type="url"
                          value={youtube}
                          onChange={(e) => {
                            setYoutube(e.target.value);
                          }}
                          className="self-stretch text-[#999ca0] placeholder-[#999ca0] font-figtree text-[16px] font-normal leading-[24px] outline-none w-[80%] h-[24px]"
                          placeholder="Eg. ..youtube/username"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex pb-[0px] flex-col gap-[24px] my-[24px]">
              <div className="w-[544px] h-[0.5px] bg-[#f2f2f2]"></div>

              <div className="flex justify-end">
                {firstContent ? (
                  <></>
                ) : (
                  <div className="flex py-[0px] px-[24px] justify-between items-center self-stretch">
                    <div className="flex items-start gap-[8px]">
                      <div
                        className="flex py-[8px] px-[16px] justify-center items-center rounded-[8px] ring-1 ring-[#999ca0]"
                        onClick={() => setFirstContent(true)}
                      >
                        <div className="w-[32px] h-[24px] text-black align-middle font-figtree text-[14px] font-semibold leading-[24px]">
                          Back
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="h-[0.5px] bg-[#f2f2f2]"></div>
                <div className="flex py-[0px] pr-[24px] justify-between items-center self-stretch">
                  <div className="flex items-start gap-[8px]">
                    <div
                      className="flex py-[8px] px-[16px] justify-center items-center rounded-[8px] bg-[#3e84f8]"
                      onClick={() => setFirstContent(false)}
                    >
                      <div className="w-[32px] h-[24px] text-white align-middle font-figtree text-[14px] font-semibold leading-[24px]">
                        {firstContent ? (
                          <span>Next</span>
                        ) : (
                          <span
                            onClick={() => {
                              setUpdated(true);
                              setIsOpen(false);
                              handleDone();
                            }}
                          >
                            Done
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
