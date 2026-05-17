import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Phone, PhoneOff, Sparkles } from "lucide-react";
import Vapi from "@vapi-ai/web";

const VAPI_PUBLIC_KEY = "263927c3-b68f-4dfe-8757-9a734306e697";
const VAPI_ASSISTANT_ID = "533b64b5-90a0-42a5-949b-ba113bdcdff0";

export function VoiceAgent() {
  const vapiRef = useRef<Vapi | null>(null);
  const [status, setStatus] = useState<"idle" | "connecting" | "active" | "ended">("idle");
  const [muted, setMuted] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const v = new Vapi(VAPI_PUBLIC_KEY);
    vapiRef.current = v;
    v.on("call-start", () => { setStatus("active"); setError(null); });
    v.on("call-end", () => { setStatus("ended"); setSpeaking(false); });
    v.on("speech-start", () => setSpeaking(true));
    v.on("speech-end", () => setSpeaking(false));
    v.on("error", (e: any) => {
      console.error("Vapi error", e);
      setError(e?.errorMsg || e?.error?.message || "Voice agent error. Please try again.");
      setStatus("idle");
    });
    return () => { v.stop(); };
  }, []);

  const start = async () => {
    if (!vapiRef.current) return;
    setError(null);
    setStatus("connecting");
    try {
      await vapiRef.current.start(VAPI_ASSISTANT_ID);
    } catch (e: any) {
      setError(e?.message || "Couldn't start voice call.");
      setStatus("idle");
    }
  };

  const stop = () => {
    vapiRef.current?.stop();
    setStatus("ended");
  };

  const toggleMute = () => {
    if (!vapiRef.current) return;
    const next = !muted;
    vapiRef.current.setMuted(next);
    setMuted(next);
  };

  const isLive = status === "active" || status === "connecting";

  return (
    <>
      {/* Floating launcher */}
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[70] group flex items-center gap-2 rounded-full pl-4 pr-5 py-3 bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] text-white shadow-lg animate-pulse-glow"
        aria-label="Talk to AI Shristi"
      >
        <span className="relative flex items-center justify-center w-7 h-7">
          <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
          <Sparkles className="w-4 h-4 relative" />
        </span>
        <span className="text-sm font-semibold tracking-tight">Talk to AI Shristi</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="fixed bottom-24 right-6 z-[70] w-[340px] glass-strong rounded-2xl p-5 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-cyan)] flex items-center justify-center">
                {speaking && (
                  <span className="absolute inset-0 rounded-full bg-[var(--neon-cyan)]/40 animate-ping" />
                )}
                <span className="text-lg font-bold relative">S</span>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">AI Shristi</div>
                <div className="text-xs text-muted-foreground">
                  {status === "idle" && "Ready to chat"}
                  {status === "connecting" && "Connecting..."}
                  {status === "active" && (speaking ? "Speaking..." : "Listening...")}
                  {status === "ended" && "Call ended"}
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground text-xs px-2 py-1 rounded-md hover:bg-white/5"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Have a quick voice chat with an AI clone of Shristi. Ask about projects, skills, or experience.
            </p>

            {error && (
              <div className="text-xs text-[var(--destructive)] bg-[var(--destructive)]/10 border border-[var(--destructive)]/30 rounded-lg p-2 mb-3">
                {error}
              </div>
            )}

            <div className="flex items-center gap-2">
              {!isLive ? (
                <button
                  onClick={start}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] text-white hover:opacity-95 transition"
                >
                  <Phone className="w-4 h-4" /> Start call
                </button>
              ) : (
                <>
                  <button
                    onClick={toggleMute}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass hover:bg-white/10 transition"
                    aria-label={muted ? "Unmute" : "Mute"}
                  >
                    {muted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={stop}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold bg-[var(--destructive)] text-white hover:opacity-95 transition"
                  >
                    <PhoneOff className="w-4 h-4" /> End call
                  </button>
                </>
              )}
            </div>

            <div className="mt-3 text-[10px] text-muted-foreground text-center">
              Powered by Vapi · Mic permission required
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}