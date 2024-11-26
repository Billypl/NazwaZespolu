<?php

namespace ps_metrics_module_v4_0_9;

// Register chunk filter if not found
if (!\array_key_exists('chunk', \stream_get_filters())) {
    \stream_filter_register('chunk', 'ps_metrics_module_v4_0_9\\Http\\Message\\Encoding\\Filter\\Chunk');
}
