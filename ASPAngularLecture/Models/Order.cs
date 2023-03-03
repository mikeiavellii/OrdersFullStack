using System;
using System.Collections.Generic;

namespace ASPAngularLecture.Models;

public partial class Order
{
    public int Id { get; set; }

    public string? Description { get; set; }

    public decimal? Cost { get; set; }

    public int? Rating { get; set; }
}
