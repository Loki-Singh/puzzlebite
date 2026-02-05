import { useEffect } from "react";

export default function DeepLinkRedirect() {
  useEffect(() => {
    const fullPath = window.location.pathname + window.location.search;

    // Try opening the mobile app
    window.location.href = `puzzlebite://open${fullPath}`;

    // If app not installed, redirect to Play Store after delay
    setTimeout(() => {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.puzzlebite.puzzlebite";
    }, 1500);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Opening PuzzleBITE App...</h2>
      <p>If the app is not installed, you will be redirected to Play Store.</p>
    </div>
  );
}