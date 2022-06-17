import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { data, ReportType } from 'src/data';
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getAllReports(reportType);
  }

  @Get(':id')
  getReportsById(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getReportById(reportType, id);
  }

  @Post()
  createReport(
    @Body() { amount, source }: { amount: number; source: string },
    @Param('type') type: string,
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.createReport(reportType, { amount, source });
  }

  @Put(':id')
  updateReport(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() body: { amount: number; source: string },
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    const reportToUpdate = data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
    if (!reportToUpdate) return;

    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
    };

    return data.report[reportIndex];
  }

  @Delete(':id')
  @HttpCode(204)
  deleteReport(@Param('id') id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);
    if (reportIndex === -1) return;

    data.report.splice(reportIndex, 1);

    return;
  }
}
