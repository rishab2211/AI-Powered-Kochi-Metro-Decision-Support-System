// 1. Define the structure of a Train object for type safety
// lib/logic.ts

export interface Train {
  id: string;
  mileageKm: number;
  stablingPosition: string;
  lastMaintenance: string;
  certificates: {
    rollingStock: string; // Dates as strings
    signalling: string;
    telecom: string;
  };
  branding: {
    wrap: string;
    commitmentHours: number;
    currentHours: number;
  };
  jobCardOpen: boolean;
  cleaningDue: boolean;
}


// lib/logic.ts

// Add this helper function at the top of the file
const daysUntil = (dateStr: string) => {
  const today = new Date();
  const expiry = new Date(dateStr);
  return Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
};

// Update the scoring function
export function calculateReadinessScore(train: Train): { score: number; issues: string[] } {
  let score = 100;
  const issues: string[] = [];
  const today = new Date();

  // Certificate checks
  Object.entries(train.certificates).forEach(([certName, expiryDate]) => {
    const daysLeft = daysUntil(expiryDate);
    if (daysLeft <= 0) {
      score -= 25;
      issues.push(`🔴 ${certName.charAt(0).toUpperCase() + certName.slice(1)} certificate has expired.`);
    } else if (daysLeft <= 7) {
      score -= 10;
      issues.push(`🟡 ${certName.charAt(0).toUpperCase() + certName.slice(1)} certificate expires in ${daysLeft} days.`);
    }
  });

  if (train.jobCardOpen) {
    score -= 30;
    issues.push("🔴 Open maintenance Job Card.");
  }
  if (train.mileageKm > 10000) {
    score -= 20;
    issues.push("🟠 Mileage is over 10,000km.");
  }
  if (train.cleaningDue) {
    score -= 10;
    issues.push("🟡 Interior cleaning is due.");
  }

  return { score: Math.max(0, score), issues };
}


export function getStatusColor(score: number): string {
  if (score > 80) return 'bg-green-500';
  if (score > 50) return 'bg-yellow-500';
  return 'bg-red-500';
}