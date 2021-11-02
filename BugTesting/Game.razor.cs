using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BugTesting
{
    public partial class Game
    {
        private ElementReference htmlCanvas;

        [Inject]
        IJSRuntime JS { get; set; } = null!;

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (!firstRender) return;

            var module = await JS.InvokeAsync<IJSUnmarshalledObjectReference>("import", "./game.js");

            await module.InvokeVoidAsync("init", new [] { htmlCanvas });
        }
    }
}
