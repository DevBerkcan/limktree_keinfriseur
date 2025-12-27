// API Client für Admin-Endpunkte

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5067/api";

// Types
export interface DashboardOverview {
  today: TodayOverview;
  nextBooking: UpcomingBooking | null;
  statistics: DashboardStatistics;
}

export interface TodayOverview {
  date: string;
  totalBookings: number;
  completedBookings: number;
  pendingBookings: number;
  cancelledBookings: number;
  totalRevenue: number;
  bookings: BookingListItem[];
}

export interface UpcomingBooking {
  id: string;
  bookingNumber: string;
  serviceName: string;
  customerName: string;
  date: string;
  startTime: string;
  endTime: string;
  minutesUntil: number;
}

export interface DashboardStatistics {
  totalBookingsThisMonth: number;
  totalBookingsLastMonth: number;
  revenueThisMonth: number;
  revenueLastMonth: number;
  totalCustomers: number;
  newCustomersThisMonth: number;
  averageBookingValue: number;
  popularServices: PopularService[];
}

export interface PopularService {
  serviceName: string;
  bookingCount: number;
  revenue: number;
}

export interface BookingListItem {
  id: string;
  bookingNumber: string;
  status: string;
  serviceName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  bookingDate: string;
  startTime: string;
  endTime: string;
  price: number;
  customerNotes: string | null;
  createdAt: string;
}

export interface PagedResponse<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface BookingFilter {
  status?: string;
  fromDate?: string;
  toDate?: string;
  serviceId?: string;
  searchTerm?: string;
  page?: number;
  pageSize?: number;
}

export interface UpdateBookingStatus {
  status: string;
  adminNotes?: string;
}

// API Functions
export async function getDashboard(): Promise<DashboardOverview> {
  const response = await fetch(`${API_BASE_URL}/admin/dashboard`);
  if (!response.ok) {
    throw new Error("Fehler beim Laden des Dashboards");
  }
  return response.json();
}

export async function getStatistics(): Promise<DashboardStatistics> {
  const response = await fetch(`${API_BASE_URL}/admin/statistics`);
  if (!response.ok) {
    throw new Error("Fehler beim Laden der Statistiken");
  }
  return response.json();
}

export async function getBookings(
  filter: BookingFilter = {}
): Promise<PagedResponse<BookingListItem>> {
  const params = new URLSearchParams();

  if (filter.status) params.append("status", filter.status);
  if (filter.fromDate) params.append("fromDate", filter.fromDate);
  if (filter.toDate) params.append("toDate", filter.toDate);
  if (filter.serviceId) params.append("serviceId", filter.serviceId);
  if (filter.searchTerm) params.append("searchTerm", filter.searchTerm);
  if (filter.page) params.append("page", filter.page.toString());
  if (filter.pageSize) params.append("pageSize", filter.pageSize.toString());

  const response = await fetch(`${API_BASE_URL}/admin/bookings?${params}`);
  if (!response.ok) {
    throw new Error("Fehler beim Laden der Buchungen");
  }
  return response.json();
}

export async function updateBookingStatus(
  bookingId: string,
  data: UpdateBookingStatus
): Promise<BookingListItem> {
  const response = await fetch(
    `${API_BASE_URL}/admin/bookings/${bookingId}/status`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Fehler beim Aktualisieren des Status");
  }

  return response.json();
}
