export default function FAQ() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">FAQs</h2>
      <div className="space-y-4">
        <details className="border-t pt-4">
          <summary className="font-bold text-lg cursor-pointer">How to apply?</summary>
          <p className="mt-2 text-gray-700">To apply for co-curricular activities, visit the activities page. Select the activity you’re interested in and fill out the application form. Make sure to submit it before the deadline.</p>
        </details>
        <details className="border-t pt-4">
          <summary className="font-bold text-lg cursor-pointer">What events are upcoming?</summary>
          <p className="mt-2 text-gray-700">You can view all upcoming events on our events calendar. It includes dates, times, and descriptions of each event. Stay updated by checking regularly.</p>
        </details>
        <details className="border-t pt-4">
          <summary className="font-bold text-lg cursor-pointer">How will I be notified?</summary>
          <p className="mt-2 text-gray-700">Notifications will be sent via email and through the university app. First-year students will receive tailored notifications related to their courses. Ensure your contact information is up to date.</p>
        </details>
        <details className="border-t pt-4">
          <summary className="font-bold text-lg cursor-pointer">Can I change my application?</summary>
          <p className="mt-2 text-gray-700">Yes, you can modify your application until the submission deadline. Log into your account and navigate to your applications. Make the necessary changes and resubmit.</p>
        </details>
        <details className="border-t pt-4">
          <summary className="font-bold text-lg cursor-pointer">Who can I contact?</summary>
          <p className="mt-2 text-gray-700">For any inquiries, please reach out to the student services office, they can assist you with any questions regarding activities and events. Contact details are available on our website.</p>
        </details>
      </div>
    </section>
  )
}