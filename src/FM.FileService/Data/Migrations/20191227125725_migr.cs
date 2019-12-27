using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FM.FileService.Data.Migrations
{
    public partial class migr : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Files",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    Path = table.Column<string>(nullable: true),
                    UploadedTime = table.Column<DateTime>(nullable: false, defaultValueSql: "getdate()"),
                    UserId = table.Column<string>(nullable: true),
                    AllowedAnonymous = table.Column<bool>(nullable: false),
                    Size = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Files", x => x.Id);
                    table.UniqueConstraint("AK_Files_Name", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "FilesSizeForUsers",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    UserId = table.Column<string>(nullable: false),
                    FilesSize = table.Column<long>(maxLength: 209715200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FilesSizeForUsers", x => x.Id);
                    table.UniqueConstraint("AK_FilesSizeForUsers_UserId", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "FileReadHistories",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    FileId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false, defaultValueSql: "getdate()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FileReadHistories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FileReadHistories_Files_FileId",
                        column: x => x.FileId,
                        principalTable: "Files",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FileReadHistories_FileId",
                table: "FileReadHistories",
                column: "FileId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FileReadHistories");

            migrationBuilder.DropTable(
                name: "FilesSizeForUsers");

            migrationBuilder.DropTable(
                name: "Files");
        }
    }
}
