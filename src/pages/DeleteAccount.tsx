export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 gradient-text">Delete Your PuzzleBITE Account</h1>

        <p className="mb-4">
          If you would like to delete your PuzzleBITE account and associated data, you can do so using one of the following methods:
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Option 1: From the App</h2>
        <ul className="list-disc pl-6 mb-4 text-white/90">
          <li>Open the PuzzleBITE app</li>
          <li>Go to <strong>Profile → Delete Account</strong></li>
          <li>Follow the on-screen instructions to confirm deletion</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Option 2: Request via Email</h2>
        <ul className="list-disc pl-6 mb-4 text-white/90">
          <li>Email us at: <strong>research@puzzlebite.app</strong></li>
          <li>Use your registered phone number or email ID</li>
          <li>Subject: <strong>Account Deletion Request</strong></li>
        </ul>

        <p className="mb-4">
          Once your request is verified, we will permanently delete:
        </p>

        <ul className="list-disc pl-6 mb-4 text-white/90">
          <li>Your user account</li>
          <li>Profile information</li>
          <li>Session and activity history</li>
          <li>Associated personal data</li>
        </ul>

        <p className="mb-4 text-white/80">
          <strong>Data Retention Notice:</strong> Some data may be retained for up to <strong>30 days</strong> for legal, regulatory, or security purposes before being permanently removed.
        </p>

        <p className="mt-6">
          For any questions, contact us at: <strong>support@puzzlebite.app</strong>
        </p>
      </div>
    </div>
  );
}