import { NgWidgetContainer } from '../directives/NgWidgetContainer';
import { INgWidgetPosition, INgWidgetSize } from '../interfaces/INgDraggableWidgetConfig';
import { ElementRef, Renderer2, OnInit } from '@angular/core';
export declare class NgWidgetPlaceholder implements OnInit {
    private _ngEl;
    private _renderer;
    private _size;
    private _position;
    private _ngWidgetContainer;
    private _cascadeMode;
    constructor(_ngEl: ElementRef, _renderer: Renderer2);
    registerGrid(ngGrid: NgWidgetContainer): void;
    ngOnInit(): void;
    setSize(newSize: INgWidgetSize): void;
    setGridPosition(newPosition: INgWidgetPosition): void;
    setCascadeMode(cascade: string): void;
    private _setDimensions(w, h);
    private _setPosition(x, y);
    private _recalculatePosition();
    private _recalculateDimensions();
}
