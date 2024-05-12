import { useState } from "react";
import { useMessages } from "@/services/useMessages";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const MessageForm = () => {
  const [content, setContent] = useState("");
  const { addMessage } = useMessages();
  const handleSubmit = async (e: any) => {
    e?.preventDefault();
    addMessage(content);
    setContent("");
  };
  return (
    <form
      className="flex-none mx-auto max-w-3xl rounded-t-xl"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          name="content"
          id="standard-multiline-static"
          label="Message to Chatbot"
          placeholder="Enter your message here..."
          multiline
          rows={3}
          defaultValue="Default Value"
          variant="standard"
          value={content}
          onChange={(e: any) => setContent(e.target.value)}
          sx={{
            "& .MuiInput-root": {
              color: "#ffffff",
              fontFamily: "Arial",
              fontWeight: "bold",
              // Bottom border
            },
          }}
        />

        <Button
          variant="contained"
          type="submit"
          className="absolute right-3 top-8"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </form>
  );
};
export default MessageForm;
