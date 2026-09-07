import { useState } from "react";
import { toast } from "sonner";
import { Send, Table2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LEADS_KEY, type Lead } from "@/data/bicte";

function readLeads(): Lead[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(LEADS_KEY);
    return raw ? (JSON.parse(raw) as Lead[]) : [];
  } catch {
    return [];
  }
}

const empty = { fullName: "", phone: "", email: "", message: "" };

export function ApplyForm() {
  const [form, setForm] = useState(empty);
  const [leads, setLeads] = useState<Lead[]>([]);

  const set = (k: keyof typeof empty) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim()) {
      toast.error("Please enter your full name.");
      return;
    }
    if (!/^\d{10}$/.test(form.phone.trim())) {
      toast.error("Phone number must be 10 digits (e.g. 98XXXXXXXX).");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const lead: Lead = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
      submittedAt: new Date().toISOString(),
    };
    const next = [lead, ...readLeads()];
    window.localStorage.setItem(LEADS_KEY, JSON.stringify(next));
    toast.success(
      "Thank you! Your inquiry has been sent to Makwanpur Multiple Campus BICTE administration.",
    );
    setForm(empty);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-card p-6 shadow-sm sm:p-8">
      <form onSubmit={submit} className="grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={form.fullName}
            onChange={set("fullName")}
            placeholder="e.g. Sita Sharma"
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              inputMode="numeric"
              maxLength={10}
              value={form.phone}
              onChange={set("phone")}
              placeholder="98XXXXXXXX"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message / Inquiry</Label>
          <Textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={set("message")}
            placeholder="Ask about admission dates, scholarships, entrance criteria…"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <Button type="submit" size="lg">
            <Send className="size-4" /> Submit Application
          </Button>

          <Dialog onOpenChange={(o) => o && setLeads(readLeads())}>
            <DialogTrigger asChild>
              <Button type="button" variant="outline" size="lg">
                <Table2 className="size-4" /> View Leads
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Submitted Inquiries</DialogTitle>
                <DialogDescription>
                  Stored locally in this browser under “{LEADS_KEY}”.
                </DialogDescription>
              </DialogHeader>
              <div className="max-h-[60vh] overflow-auto rounded-lg border border-slate-200">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.length === 0 ? (
                      <TableRow>
                        <TableCell
                          colSpan={5}
                          className="py-8 text-center text-muted-foreground"
                        >
                          No inquiries submitted yet.
                        </TableCell>
                      </TableRow>
                    ) : (
                      leads.map((l) => (
                        <TableRow key={l.id}>
                          <TableCell className="font-medium">{l.fullName}</TableCell>
                          <TableCell>{l.phone}</TableCell>
                          <TableCell>{l.email}</TableCell>
                          <TableCell className="max-w-[16rem] truncate">
                            {l.message || "—"}
                          </TableCell>
                          <TableCell>
                            {new Date(l.submittedAt).toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </form>
    </div>
  );
}
