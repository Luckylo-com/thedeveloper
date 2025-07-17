
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import useModalSendEmail from "@/app/hooks/useModalSendEmail";
import { Modal } from "@/app/components/modals/Modal";
import { Checkbox } from "@/app/components/Checkbox";


export function ModalSendEmail() {

  const cardModalSendEmail = useModalSendEmail();

  const [nameClient, setNameClient] = useState("")
  const [emailClient, setEmailClient] = useState("")
  const [phoneClient, setPhoneClient] = useState("")
  const [commentClient, setCommentClient] = useState("")
  const [isChecked, setIsChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const dataForm = {
    nameClient,
    phoneClient,
    emailClient,
    commentClient,
  }

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  useEffect(() => {
    setDisabled(
      nameClient === "" || emailClient === "" || commentClient === ""
    );
  }, [nameClient, emailClient, commentClient]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataForm),
      });

      if (response.ok) {
        toast.success(`Hi ${dataForm.nameClient}, ваше сообщение отправлено!`);
        cardModalSendEmail.onClose() // Close the form after a successful submission
      } else {
        toast.error("Ошибка отправки. Пожалуйста, попробуйте еще раз.");
      }
    } catch (error) {
      console.log("first", error)
      toast.error("Произошла ошибка. Повторите попытку.");
    }
  };

  const bodyContent = (
    <form
      onSubmit={sendEmail}
      className="flex flex-col font-[family-name:var(--font-manrope-mono)] text-bluemiddle
       text-lg max-s393:text-base"
    >
      <h1 className="pl-6 -mt-6 text-2xl font-semibold max-w-fit max-s393:text-xl 
      max-s393:pl-4">
        Отправьте нам сообщение
      </h1>
      <p className="mt-6 pl-6 mb-1 max-s393:text-base max-s393:pl-4">Имя:</p>
      <div className="border border-gray py-3 px-6 rounded-xl max-s393:py-2">
        <input
          type="text"
          id="name"
          name="name"
          //placeholder={"Маргулан Сейсембаев"}
          value={nameClient}
          onChange={(e) => setNameClient(e.target.value)}
          required
          className="focus:outline-none focus:ring-0 bg-transparent text-bluemiddle text-lg
          w-full max-s393:text-base"
        />
      </div>
      <p className="mt-3 pl-6 mb-1 max-s393:text-base max-s393:pl-4">E-mail:</p>
      <div className="border border-gray py-3 px-6 rounded-xl max-s393:py-2">
        <input
          type="email"
          id="email"
          name="email"
          value={emailClient}
          onChange={(e) => setEmailClient(e.target.value)}
          required
          className="focus:outline-none focus:ring-0 bg-transparent text-bluemiddle text-lg
          w-full max-s393:text-base"
        />
      </div>
      <p className="mt-3 pl-6 mb-1 max-s393:text-base max-s393:pl-4">Телефон:</p>
      <div className="border border-gray py-3 px-6 rounded-xl max-s393:py-2">
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phoneClient}
          onChange={(e) => setPhoneClient(e.target.value)}
          className="focus:outline-none focus:ring-0 bg-transparent text-bluemiddle text-lg
          w-full max-s393:text-base"
        />
      </div>
      <p className="mt-3 pl-6 mb-1 max-s393:text-base max-s393:pl-4">Сообщение:</p>
      <div className="border border-gray py-3 px-6 rounded-xl max-s393:py-2">
        <textarea
          id="comment"
          name="comment"
          value={commentClient}
          onChange={(e) => setCommentClient(e.target.value)}
          className="focus:outline-none focus:ring-0 bg-transparent text-bluemiddle text-lg
          w-full max-s393:text-base"
        />
      </div>
      <div className="flex flex-col">
        <Checkbox
          label="Я даю согласие на обработку персональных данных в соответствии с"
          checked={isChecked}
          onChange={handleCheckboxChange}
        //className="tracking-widest text-base font-normal"
        />
        <Link
          href={"/"}
          target="_blank"
          className="accept_polisy_link underline decoration-blue ml-2"
        >
          политикой конфиденциальности
        </Link>
      </div>
      <button
        type="submit"
        disabled={nameClient === "" || emailClient === "" || commentClient === "" || !isChecked || disabled}
        className="flex w-full bg-blue text-white text-2xl font-semibold justify-center
      py-4 rounded-xl my-8 cursor-pointer hover:bg-blue3 max-s393:text-xl max-s393:py-3">
        Отправить
      </button>
    </form>
  );

  return (
    <>
      <Modal
        //disabled={isLoading}
        isOpen={cardModalSendEmail.isOpen}
        onClose={cardModalSendEmail.onClose}
        body={bodyContent}
      //onSubmit={handleSubmit(onSubmit)}
      />
    </>
  )
}
