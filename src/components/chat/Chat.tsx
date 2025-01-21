import { FC } from "react";
import { ChatMessageRating, Message } from "./types";
import ChatMessageBubble from "./ChatMessageBubble";

type Props = {
  className?: string;
  messages: Message[];
  onRate?: (messageId: string, rating: ChatMessageRating) => void;
  isMessagesLoading?: boolean;
};

const Chat: FC<Props> = (props) => {
  // const isMessagesLoading = true;
  return (
    <div
      className={
        "flex flex-col-reverse content-center " + (props.className || "")
      }
    >
      <div className="flex-1 px-2 pb-10 pt-5 md:px-36 lg:px-80">
        {(props.messages || [])
          .slice() // Create a shallow copy to avoid mutating the original array
          .sort(
            (a, b) =>
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime(),
          ) // Sort by created_at
          .map((message, index) => (
            <ChatMessageBubble
              key={message.id || index}
              id={message.id}
              role={message.role}
              content={message.content}
              created_at={message.created_at}
              // {...message}
              onRate={(rating) => props.onRate?.(message.id, rating)}
            />
          ))}

        {props.isMessagesLoading && (
          <>
            <div className="flex h-full w-full flex-col justify-center gap-5">
              <span className="text-primary loading loading-spinner loading-md mx-auto"></span>
              <h1 className="text-center font-semibold">Memuat pesan...</h1>
            </div>
          </>
        )}
        {/* Loading Bubble */}
        {/* <div className="flex gap-2">
          <div className="avatar chat-image">
            <div className="w-10 rounded-full">
              <img alt="assistant" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="skeleton flex h-14 w-80 items-center gap-5 px-5">
            <span className="loading loading-ring loading-md"></span>
            <h1 className="">Loading...</h1>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Chat;
