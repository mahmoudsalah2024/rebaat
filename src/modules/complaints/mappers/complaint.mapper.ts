import type { ComplaintResponseDTO } from '../api/complaints.dto'
import type { ComplaintData } from '../types/complaintData.model'

export const mapComplaint = (dto: ComplaintResponseDTO): ComplaintData => ({
  id: dto.id,
  fullName: dto.fullName,
  phone: dto.phone,
  email: dto.email,
  apartmentNumber: dto.apartmentNumber,
  complaintType: dto.complaintType,
  problemDescription: dto.problemDescription,
  complaintDate: dto.complaintDate,
  complaintTime: dto.complaintTime,
  notes: dto.notes,
  createdAt: new Date(dto.createdAt),
})
