import Button from "@/components/ui/buttons";

export default function Page() {
  return (
    <div className="p-10 flex flex-col gap-4">
      {/* For your main Booking button */}
      <Button variant="primary" size="lg">
        Book Detailed Wash
      </Button>

      {/* For your Admin login or Secondary actions */}
      <Button variant="secondary">Go to Dashboard</Button>

      {/* For the "Cancel" or "Delete" actions in Admin Panel */}
      <Button variant="danger" size="sm">
        Delete Record
      </Button>

      {/* Testing the Loading state */}
      <Button isLoading>Processing...</Button>
    </div>
  );
}
