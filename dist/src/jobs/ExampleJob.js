var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Job, JobBase, Schedule } from "@lyra-js/core";
/**
 * ExampleJob - Demonstrates scheduled job functionality
 * Jobs can have multiple scheduled methods with different recurrency patterns
 * Access injected dependencies: this.userRepository, this.emailService, etc.
 */
let ExampleJob = class ExampleJob extends JobBase {
    /**
     * Example: Daily report that runs every day at 9:00 AM
     * Uncomment to enable this scheduler
     */
    async sendDailyReport() {
        console.log("Sending daily report...");
        // Your logic here
        // Example: const users = await this.userRepository.findAll();
    }
    /**
     * Example: Weekly cleanup that runs every Monday at 2:00 AM
     * Uncomment to enable this scheduler
     */
    // @Schedule({ recurrency: '0 2 * * 1', enabled: false })
    // async weeklyCleanup() {
    //   console.log('Running weekly cleanup...');
    //   // Your logic here
    // }
    /**
     * Example: Monthly summary on the 1st of each month at midnight
     * Uncomment to enable this scheduler
     */
    // @Schedule({ recurrency: '0 0 1 * *', enabled: false })
    // async monthlySummary() {
    //   console.log('Generating monthly summary...');
    //   // Your logic here
    // }
    /**
     * Lifecycle hook - called when the job is initialized
     */
    async onInit() {
        // console.log("ExampleJob initialized")
    }
    /**
     * Lifecycle hook - called before each scheduled method execution
     */
    async beforeExecute() {
        // Add common logic before each job execution
        // Example: Set up database transaction, log execution start, etc.
    }
    /**
     * Lifecycle hook - called after each scheduled method execution
     */
    async afterExecute() {
        // Add common logic after each job execution
        // Example: Commit transaction, log execution end, cleanup, etc.
    }
};
__decorate([
    Schedule({ recurrency: "0 9 * * *", enabled: false }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExampleJob.prototype, "sendDailyReport", null);
ExampleJob = __decorate([
    Job()
], ExampleJob);
export { ExampleJob };
